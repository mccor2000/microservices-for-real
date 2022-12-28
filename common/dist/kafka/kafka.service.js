"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var KafkaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaService = void 0;
const common_1 = require("@nestjs/common");
const kafkajs_1 = require("kafkajs");
const logger_service_1 = require("@nestjs/common/services/logger.service");
const kafka_logger_1 = require("@nestjs/microservices/helpers/kafka-logger");
const kafka_response_deserializer_1 = require("./deserializer/kafka-response.deserializer");
const kafka_request_serializer_1 = require("./serializer/kafka-request.serializer");
const kafka_decorator_1 = require("./kafka.decorator");
let KafkaService = KafkaService_1 = class KafkaService {
    constructor(options) {
        var _a;
        this.topicOffsets = new Map();
        this.logger = new logger_service_1.Logger(KafkaService_1.name);
        const { client, consumer: consumerConfig, producer: producerConfig, } = options;
        this.kafka = new kafkajs_1.Kafka(Object.assign(Object.assign({}, client), { logCreator: kafka_logger_1.KafkaLogger.bind(null, this.logger) }));
        if (producerConfig) {
            this.producer = this.kafka.producer(producerConfig);
        }
        if (consumerConfig) {
            const { groupId } = consumerConfig;
            const consumerOptions = Object.assign({
                groupId: this.getGroupIdSuffix(groupId),
            }, consumerConfig);
            this.consumer = this.kafka.consumer(consumerOptions);
        }
        this.autoConnect = (_a = options.autoConnect) !== null && _a !== void 0 ? _a : true;
        this.admin = this.kafka.admin();
        this.initializeDeserializer(options);
        this.initializeSerializer(options);
        this.options = options;
    }
    onModuleInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield this.getTopicOffsets();
            if (this.consumer) {
                kafka_decorator_1.SUBSCRIBER_MAP.forEach((functionRef, topic) => {
                    this.subscribe(topic);
                });
                this.bindAllTopicToConsumer();
            }
        });
    }
    onModuleDestroy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.disconnect();
        });
    }
    /**
     * Connect the kafka service.
     */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.autoConnect) {
                return;
            }
            this.producer && (yield this.producer.connect());
            this.consumer && (yield this.consumer.connect());
            yield this.admin.connect();
        });
    }
    /**
     * Disconnects the kafka service.
     */
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.producer && (yield this.producer.disconnect());
            this.consumer && (yield this.consumer.disconnect());
            yield this.admin.disconnect();
        });
    }
    /**
     * Gets the high, low and partitions of a topic.
     */
    getTopicOffsets() {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const topics = kafka_decorator_1.SUBSCRIBER_MAP.keys();
            try {
                for (var _d = true, topics_1 = __asyncValues(topics), topics_1_1; topics_1_1 = yield topics_1.next(), _a = topics_1_1.done, !_a;) {
                    _c = topics_1_1.value;
                    _d = false;
                    try {
                        const topic = _c;
                        try {
                            const topicOffsets = yield this.admin.fetchTopicOffsets(topic);
                            this.topicOffsets.set(topic, topicOffsets);
                        }
                        catch (e) {
                            this.logger.error('Error fetching topic offset: ', topic);
                        }
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = topics_1.return)) yield _b.call(topics_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    /**
     * Subscribes to the topics.
     *
     * @param topic
     */
    subscribe(topic) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.consumer)
                return;
            yield this.consumer.subscribe({
                topic,
                fromBeginning: this.options.consumeFromBeginning || false
            });
        });
    }
    /**
     * Send/produce a message to a topic.
     *
     * @param message
     */
    send(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.producer) {
                this.logger.error('There is no producer, unable to send message.');
                return;
            }
            const serializedPacket = yield this.serializer.serialize(message);
            // @todo - rather than have a producerRecord, 
            // most of this can be done when we create the controller.
            return yield this.producer.send(serializedPacket);
        });
    }
    /**
     * Gets the groupId suffix for the consumer.
     *
     * @param groupId
     */
    getGroupIdSuffix(groupId) {
        return groupId + '-client';
    }
    /**
     * Calls the method you are subscribed to.
     *
     * @param topic
     *  The topic to subscribe to.
     * @param instance
     *  The class instance.
     */
    subscribeToResponseOf(topic, instance) {
        kafka_decorator_1.SUBSCRIBER_OBJECT_MAP.set(topic, instance);
    }
    /**
     * Returns a new producer transaction in order to produce messages and commit offsets together
     */
    // async transaction(): Promise<KafkaTransaction> {
    //   const producer = this.producer;
    //   if (!producer) {
    //     const msg = 'There is no producer, unable to start transactions.';
    //     this.logger.error(msg);
    //     throw msg;
    //   }
    //   const tx = await producer.transaction();
    //   const retval: KafkaTransaction = {
    //     abort(): Promise<void> {
    //       return tx.abort();
    //     },
    //     commit(): Promise<void> {
    //       return tx.commit();
    //     },
    //     isActive(): boolean {
    //       return tx.isActive();
    //     },
    //     async send(message: KafkaMessageSend): Promise<RecordMetadata[]> {
    //       const serializedPacket = await this.serializer.serialize(message);
    //       return await tx.send(serializedPacket);
    //     },
    //     sendOffsets(offsets: Offsets & { consumerGroupId: string }): Promise<void> {
    //       return tx.sendOffsets(offsets);
    //     },
    //   };
    //   return retval;
    // }
    /**
     * Commit consumer offsets manually.
     * Please note that in most cases you will want to use the given __autoCommitThreshold__
     * or use a transaction to atomically set offsets and outgoing messages.
     *
     * @param topicPartitions
     */
    commitOffsets(topicPartitions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.consumer)
                return;
            return this.consumer.commitOffsets(topicPartitions);
        });
    }
    /**
     * Sets up the serializer to encode outgoing messages.
     *
     * @param options
     */
    initializeSerializer(options) {
        this.serializer = (options && options.serializer) || new kafka_request_serializer_1.KafkaRequestSerializer();
    }
    /**
     * Sets up the deserializer to decode incoming messages.
     *
     * @param options
     */
    initializeDeserializer(options) {
        this.deserializer = (options && options.deserializer) || new kafka_response_deserializer_1.KafkaResponseDeserializer();
    }
    /**
     * Runs the consumer and calls the consumers when a message arrives.
     */
    bindAllTopicToConsumer() {
        if (!this.consumer)
            return;
        const runConfig = (this.options.consumerRunConfig) ? this.options.consumerRunConfig : {};
        this.consumer.run(Object.assign(Object.assign({}, runConfig), { eachMessage: ({ topic, partition, message }) => __awaiter(this, void 0, void 0, function* () {
                const objectRef = kafka_decorator_1.SUBSCRIBER_OBJECT_MAP.get(topic);
                const callback = kafka_decorator_1.SUBSCRIBER_MAP.get(topic);
                try {
                    const { timestamp, response, offset, key, headers } = yield this.deserializer.deserialize(message, { topic });
                    yield callback.apply(objectRef, [response, key, offset, timestamp, partition, headers]);
                }
                catch (e) {
                    this.logger.error(`Error for message ${topic}: ${e}`);
                    // Log and throw to ensure we don't keep processing the messages when there is an error.
                    throw e;
                }
            }) }));
        if (this.options.seek !== undefined) {
            this.seekTopics();
        }
    }
    /**
     * Seeks to a specific offset defined in the config
     * or to the lowest value and across all partitions.
     */
    seekTopics() {
        //@ts-ignore
        Object.keys(this.options.seek).forEach((topic) => {
            const topicOffsets = this.topicOffsets.get(topic);
            //@ts-ignore
            const seekPoint = this.options.seek[topic];
            //@ts-ignore
            topicOffsets.forEach((topicOffset) => {
                var _a;
                let seek = String(seekPoint);
                // Seek by timestamp
                if (typeof seekPoint == 'object') {
                    const time = seekPoint;
                    seek = time.getTime().toString();
                }
                // Seek to the earliest timestamp.
                if (seekPoint === 'earliest') {
                    seek = topicOffset.low;
                }
                (_a = this.consumer) === null || _a === void 0 ? void 0 : _a.seek({
                    topic,
                    partition: topicOffset.partition,
                    offset: seek
                });
            });
        });
    }
};
KafkaService = KafkaService_1 = __decorate([
    (0, common_1.Injectable)()
], KafkaService);
exports.KafkaService = KafkaService;
