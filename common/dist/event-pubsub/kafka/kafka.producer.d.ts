import { OnApplicationShutdown } from "@nestjs/common";
import { Message } from "kafkajs";
import { IProducer } from "../event-pubsub.interfaces";
export declare class KafkaProducerService implements OnApplicationShutdown {
    private readonly broker;
    private readonly producers;
    constructor(broker?: string);
    onApplicationShutdown(): Promise<void>;
    produce(topic: string, message: Message): Promise<void>;
}
export declare class KafkaProducer implements IProducer {
    private readonly topic;
    private readonly client;
    private readonly producer;
    private readonly logger;
    constructor(topic: string, broker: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    produce(message: Message): Promise<any>;
}
