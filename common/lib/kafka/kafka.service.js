"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaService = void 0;
var common_1 = require("@nestjs/common");
var kafkajs_1 = require("kafkajs");
var logger_service_1 = require("@nestjs/common/services/logger.service");
var kafka_logger_1 = require("@nestjs/microservices/helpers/kafka-logger");
var kafka_response_deserializer_1 = require("./deserializer/kafka-response.deserializer");
var kafka_request_serializer_1 = require("./serializer/kafka-request.serializer");
var kafka_decorator_1 = require("./kafka.decorator");
var KafkaService = /** @class */ (function () {
    function KafkaService(options) {
        var _a;
        this.topicOffsets = new Map();
        this.logger = new logger_service_1.Logger(KafkaService_1.name);
        var client = options.client, consumerConfig = options.consumer, producerConfig = options.producer;
        this.kafka = new kafkajs_1.Kafka(__assign(__assign({}, client), { logCreator: kafka_logger_1.KafkaLogger.bind(null, this.logger) }));
        if (producerConfig) {
            this.producer = this.kafka.producer(producerConfig);
        }
        if (consumerConfig) {
            var groupId = consumerConfig.groupId;
            var consumerOptions = Object.assign({
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
    KafkaService_1 = KafkaService;
    KafkaService.prototype.onModuleInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getTopicOffsets()];
                    case 2:
                        _a.sent();
                        if (this.consumer) {
                            kafka_decorator_1.SUBSCRIBER_MAP.forEach(function (functionRef, topic) {
                                _this.subscribe(topic);
                            });
                            this.bindAllTopicToConsumer();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    KafkaService.prototype.onModuleDestroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.disconnect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Connect the kafka service.
     */
    KafkaService.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.autoConnect) {
                            return [2 /*return*/];
                        }
                        _a = this.producer;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.producer.connect()];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a;
                        _b = this.consumer;
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.consumer.connect()];
                    case 3:
                        _b = (_c.sent());
                        _c.label = 4;
                    case 4:
                        _b;
                        return [4 /*yield*/, this.admin.connect()];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Disconnects the kafka service.
     */
    KafkaService.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.producer;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.producer.disconnect()];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a;
                        _b = this.consumer;
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.consumer.disconnect()];
                    case 3:
                        _b = (_c.sent());
                        _c.label = 4;
                    case 4:
                        _b;
                        return [4 /*yield*/, this.admin.disconnect()];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the high, low and partitions of a topic.
     */
    KafkaService.prototype.getTopicOffsets = function () {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var topics, _d, topics_1, topics_1_1, topic, topicOffsets, e_2, e_1_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        topics = kafka_decorator_1.SUBSCRIBER_MAP.keys();
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 12, 13, 18]);
                        _d = true, topics_1 = __asyncValues(topics);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, topics_1.next()];
                    case 3:
                        if (!(topics_1_1 = _e.sent(), _a = topics_1_1.done, !_a)) return [3 /*break*/, 11];
                        _c = topics_1_1.value;
                        _d = false;
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, , 9, 10]);
                        topic = _c;
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.admin.fetchTopicOffsets(topic)];
                    case 6:
                        topicOffsets = _e.sent();
                        this.topicOffsets.set(topic, topicOffsets);
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _e.sent();
                        this.logger.error('Error fetching topic offset: ', topic);
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        _d = true;
                        return [7 /*endfinally*/];
                    case 10: return [3 /*break*/, 2];
                    case 11: return [3 /*break*/, 18];
                    case 12:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 18];
                    case 13:
                        _e.trys.push([13, , 16, 17]);
                        if (!(!_d && !_a && (_b = topics_1.return))) return [3 /*break*/, 15];
                        return [4 /*yield*/, _b.call(topics_1)];
                    case 14:
                        _e.sent();
                        _e.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 17: return [7 /*endfinally*/];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Subscribes to the topics.
     *
     * @param topic
     */
    KafkaService.prototype.subscribe = function (topic) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.consumer)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.consumer.subscribe({
                                topic: topic,
                                fromBeginning: this.options.consumeFromBeginning || false
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send/produce a message to a topic.
     *
     * @param message
     */
    KafkaService.prototype.send = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var serializedPacket;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.producer) {
                            this.logger.error('There is no producer, unable to send message.');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.serializer.serialize(message)];
                    case 1:
                        serializedPacket = _a.sent();
                        return [4 /*yield*/, this.producer.send(serializedPacket)];
                    case 2: 
                    // @todo - rather than have a producerRecord, 
                    // most of this can be done when we create the controller.
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the groupId suffix for the consumer.
     *
     * @param groupId
     */
    KafkaService.prototype.getGroupIdSuffix = function (groupId) {
        return groupId + '-client';
    };
    /**
     * Calls the method you are subscribed to.
     *
     * @param topic
     *  The topic to subscribe to.
     * @param instance
     *  The class instance.
     */
    KafkaService.prototype.subscribeToResponseOf = function (topic, instance) {
        kafka_decorator_1.SUBSCRIBER_OBJECT_MAP.set(topic, instance);
    };
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
    KafkaService.prototype.commitOffsets = function (topicPartitions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.consumer)
                    return [2 /*return*/];
                return [2 /*return*/, this.consumer.commitOffsets(topicPartitions)];
            });
        });
    };
    /**
     * Sets up the serializer to encode outgoing messages.
     *
     * @param options
     */
    KafkaService.prototype.initializeSerializer = function (options) {
        this.serializer = (options && options.serializer) || new kafka_request_serializer_1.KafkaRequestSerializer();
    };
    /**
     * Sets up the deserializer to decode incoming messages.
     *
     * @param options
     */
    KafkaService.prototype.initializeDeserializer = function (options) {
        this.deserializer = (options && options.deserializer) || new kafka_response_deserializer_1.KafkaResponseDeserializer();
    };
    /**
     * Runs the consumer and calls the consumers when a message arrives.
     */
    KafkaService.prototype.bindAllTopicToConsumer = function () {
        var _this = this;
        if (!this.consumer)
            return;
        var runConfig = (this.options.consumerRunConfig) ? this.options.consumerRunConfig : {};
        this.consumer.run(__assign(__assign({}, runConfig), { eachMessage: function (_a) {
                var topic = _a.topic, partition = _a.partition, message = _a.message;
                return __awaiter(_this, void 0, void 0, function () {
                    var objectRef, callback, _b, timestamp, response, offset, key, headers, e_3;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                objectRef = kafka_decorator_1.SUBSCRIBER_OBJECT_MAP.get(topic);
                                callback = kafka_decorator_1.SUBSCRIBER_MAP.get(topic);
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, this.deserializer.deserialize(message, { topic: topic })];
                            case 2:
                                _b = _c.sent(), timestamp = _b.timestamp, response = _b.response, offset = _b.offset, key = _b.key, headers = _b.headers;
                                return [4 /*yield*/, callback.apply(objectRef, [response, key, offset, timestamp, partition, headers])];
                            case 3:
                                _c.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                e_3 = _c.sent();
                                this.logger.error("Error for message ".concat(topic, ": ").concat(e_3));
                                // Log and throw to ensure we don't keep processing the messages when there is an error.
                                throw e_3;
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            } }));
        if (this.options.seek !== undefined) {
            this.seekTopics();
        }
    };
    /**
     * Seeks to a specific offset defined in the config
     * or to the lowest value and across all partitions.
     */
    KafkaService.prototype.seekTopics = function () {
        var _this = this;
        //@ts-ignore
        Object.keys(this.options.seek).forEach(function (topic) {
            var topicOffsets = _this.topicOffsets.get(topic);
            //@ts-ignore
            var seekPoint = _this.options.seek[topic];
            //@ts-ignore
            topicOffsets.forEach(function (topicOffset) {
                var _a;
                var seek = String(seekPoint);
                // Seek by timestamp
                if (typeof seekPoint == 'object') {
                    var time = seekPoint;
                    seek = time.getTime().toString();
                }
                // Seek to the earliest timestamp.
                if (seekPoint === 'earliest') {
                    seek = topicOffset.low;
                }
                (_a = _this.consumer) === null || _a === void 0 ? void 0 : _a.seek({
                    topic: topic,
                    partition: topicOffset.partition,
                    offset: seek
                });
            });
        });
    };
    var KafkaService_1;
    KafkaService = KafkaService_1 = __decorate([
        (0, common_1.Injectable)()
    ], KafkaService);
    return KafkaService;
}());
exports.KafkaService = KafkaService;
