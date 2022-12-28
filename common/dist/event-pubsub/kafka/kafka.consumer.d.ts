import { OnApplicationShutdown } from "@nestjs/common";
import { ConsumerConfig, ConsumerSubscribeTopics, Message } from "kafkajs";
import { IConsumer } from "../event-pubsub.interfaces";
export declare class KafkaConsumerService implements OnApplicationShutdown {
    private readonly broker;
    private readonly consumers;
    constructor(broker?: string);
    onApplicationShutdown(): Promise<void>;
    consume({ topic, config, onMessage }: KafkaConsumerOpts): Promise<void>;
}
export type KafkaConsumerOpts = {
    topic: ConsumerSubscribeTopics;
    config: ConsumerConfig;
    onMessage: (msg: Message) => Promise<void>;
};
export declare class KafkaConsumer implements IConsumer {
    private readonly topic;
    private readonly client;
    private readonly consumer;
    private readonly logger;
    constructor(topic: ConsumerSubscribeTopics, config: ConsumerConfig, broker: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    consume(onMessage: (msg: Message) => Promise<void>): Promise<void>;
}
