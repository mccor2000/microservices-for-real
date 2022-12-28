import { Logger, OnApplicationShutdown } from "@nestjs/common";
import { Consumer, ConsumerConfig, ConsumerSubscribeTopics, Kafka, Message } from "kafkajs";

import { IConsumer } from "../event-pubsub.interfaces";

export class KafkaConsumerService implements OnApplicationShutdown {
    private readonly consumers: IConsumer[] = []

    constructor(private readonly broker: string = "127.0.0.1:9092") {}

    async onApplicationShutdown() {
        await Promise.all(this.consumers.map(c => c.disconnect()))
    }

    async consume({ topic, config, onMessage}: KafkaConsumerOpts): Promise<void> {
        const consumer = new KafkaConsumer(topic, config, this.broker)

        await consumer.connect()
        await consumer.consume(onMessage)
        this.consumers.push(consumer)
    }
}

export type KafkaConsumerOpts = {
    topic: ConsumerSubscribeTopics,
    config: ConsumerConfig,
    onMessage: (msg: Message) => Promise<void>
}

export class KafkaConsumer implements IConsumer {
    private readonly client: Kafka
    private readonly consumer: Consumer
    private readonly logger: Logger

    constructor(
        private readonly topic: ConsumerSubscribeTopics,
        config: ConsumerConfig,
        broker: string,
    ) {
        this.client = new Kafka({ brokers: [broker] });
        this.consumer = this.client.consumer(config)
        this.logger = new Logger(`${topic.topics}-${config.groupId}`)
    }

    async connect(): Promise<void> {
        try {
            await this.consumer.connect()
        } catch (error) {
            this.logger.error('Failed to connect to Kafka')
            // sleep 5 secs
            await new Promise((resolve, _) => setTimeout(resolve, 5 * 1000))
            await this.connect()
        }
    };

    async disconnect(): Promise<void> {
        await this.consumer.disconnect()
    }

    async consume(onMessage: (msg: Message) => Promise<void>): Promise<void> {
        await this.consumer.subscribe(this.topic);
        await this.consumer.run({
            eachMessage: async ({ message, partition}) => {
                this.logger.debug(`Processing message partition ${partition}`)
                await onMessage(message)
            }
        })
    }
}