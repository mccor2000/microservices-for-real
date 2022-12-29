"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaConsumer = exports.KafkaConsumerService = void 0;
const common_1 = require("@nestjs/common");
const kafkajs_1 = require("kafkajs");
class KafkaConsumerService {
    constructor(broker = "127.0.0.1:9092") {
        this.broker = broker;
        this.consumers = [];
    }
    onApplicationShutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this.consumers.map(c => c.disconnect()));
        });
    }
    consume({ topic, config, onMessage }) {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = new KafkaConsumer(topic, config, this.broker);
            yield consumer.connect();
            yield consumer.consume(onMessage);
            this.consumers.push(consumer);
        });
    }
}
exports.KafkaConsumerService = KafkaConsumerService;
class KafkaConsumer {
    constructor(topic, config, broker) {
        this.topic = topic;
        this.client = new kafkajs_1.Kafka({ brokers: [broker] });
        this.consumer = this.client.consumer(config);
        this.logger = new common_1.Logger(`${topic.topics}-${config.groupId}`);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.consumer.connect();
            }
            catch (error) {
                this.logger.error('Failed to connect to Kafka');
                // sleep 5 secs
                yield new Promise((resolve, _) => setTimeout(resolve, 5 * 1000));
                yield this.connect();
            }
        });
    }
    ;
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.consumer.disconnect();
        });
    }
    consume(onMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.consumer.subscribe(this.topic);
            yield this.consumer.run({
                partitionsConsumedConcurrently: 3,
                eachMessage: ({ message, partition }) => __awaiter(this, void 0, void 0, function* () {
                    this.logger.debug(`Processing message partition ${partition}`);
                    yield onMessage(message);
                })
            });
        });
    }
}
exports.KafkaConsumer = KafkaConsumer;
