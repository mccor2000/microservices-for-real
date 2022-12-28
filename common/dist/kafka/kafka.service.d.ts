import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { RecordMetadata, SeekEntry, TopicPartitionOffsetAndMetadata } from 'kafkajs';
import { Logger } from "@nestjs/common/services/logger.service";
import { KafkaModuleOption, KafkaMessageSend } from './interfaces';
export declare class KafkaService implements OnModuleInit, OnModuleDestroy {
    private kafka;
    private producer?;
    private consumer?;
    private admin;
    private deserializer;
    private serializer;
    private autoConnect;
    private options;
    protected topicOffsets: Map<string, (SeekEntry & {
        high: string;
        low: string;
    })[]>;
    protected logger: Logger;
    constructor(options: KafkaModuleOption['options']);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    /**
     * Connect the kafka service.
     */
    connect(): Promise<void>;
    /**
     * Disconnects the kafka service.
     */
    disconnect(): Promise<void>;
    /**
     * Gets the high, low and partitions of a topic.
     */
    private getTopicOffsets;
    /**
     * Subscribes to the topics.
     *
     * @param topic
     */
    private subscribe;
    /**
     * Send/produce a message to a topic.
     *
     * @param message
     */
    send(message: KafkaMessageSend): Promise<RecordMetadata[] | void>;
    /**
     * Gets the groupId suffix for the consumer.
     *
     * @param groupId
     */
    getGroupIdSuffix(groupId: string): string;
    /**
     * Calls the method you are subscribed to.
     *
     * @param topic
     *  The topic to subscribe to.
     * @param instance
     *  The class instance.
     */
    subscribeToResponseOf<T>(topic: string, instance: T): void;
    /**
     * Returns a new producer transaction in order to produce messages and commit offsets together
     */
    /**
     * Commit consumer offsets manually.
     * Please note that in most cases you will want to use the given __autoCommitThreshold__
     * or use a transaction to atomically set offsets and outgoing messages.
     *
     * @param topicPartitions
     */
    commitOffsets(topicPartitions: Array<TopicPartitionOffsetAndMetadata>): Promise<void>;
    /**
     * Sets up the serializer to encode outgoing messages.
     *
     * @param options
     */
    protected initializeSerializer(options: KafkaModuleOption['options']): void;
    /**
     * Sets up the deserializer to decode incoming messages.
     *
     * @param options
     */
    protected initializeDeserializer(options: KafkaModuleOption['options']): void;
    /**
     * Runs the consumer and calls the consumers when a message arrives.
     */
    private bindAllTopicToConsumer;
    /**
     * Seeks to a specific offset defined in the config
     * or to the lowest value and across all partitions.
     */
    private seekTopics;
}
