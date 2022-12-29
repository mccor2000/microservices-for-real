import { Logger, OnApplicationShutdown } from "@nestjs/common";
import { Kafka, Message, Partitioners, Producer } from "kafkajs";

import { IProducer } from "../event-pubsub.interfaces";

export class KafkaProducerService implements OnApplicationShutdown {
    private readonly producers = new Map<string, IProducer>

    constructor(private readonly broker: string = "127.0.0.1:9092") { }

    async onApplicationShutdown() {
        await Promise.all(Array.from(this.producers.values()).map(p => p.disconnect()))
    }

    async produce(topic: string, message: Message) {
        let producer = this.producers.get(topic)

        if (!producer) {
            producer = new KafkaProducer(topic, this.broker)

            await producer.connect()
            this.producers.set(topic, producer)
        }

        await producer.produce(message)
    }
}

export class KafkaProducer implements IProducer {
    private readonly client: Kafka
    private readonly producer: Producer
    private readonly logger: Logger

    constructor(private readonly topic: string, broker: string) {
        this.client = new Kafka({ brokers: [broker]})
        this.producer = this.client.producer({ createPartitioner: Partitioners.LegacyPartitioner })
        this.logger = new Logger(`topic: ${this.topic}`)
    }

    async connect(): Promise<void> {
        try {
            await this.producer.connect()
        } catch (error) {
            this.logger.error('Failed to connect to Kafka')
            // sleep 5 secs
            await new Promise((resolve, _) => setTimeout(resolve, 5 * 1000))
            await this.connect()
        }
    };

    async disconnect(): Promise<void> {
        await this.producer.disconnect()
    }

    async produce(message: Message): Promise<any> {
        await this.producer.send({ topic: this.topic, messages: [message]})
    }
}