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
exports.KafkaProducer = exports.KafkaProducerService = void 0;
const common_1 = require("@nestjs/common");
const kafkajs_1 = require("kafkajs");
class KafkaProducerService {
    constructor(broker = "127.0.0.1:9092") {
        this.broker = broker;
        this.producers = new Map;
    }
    onApplicationShutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(Array.from(this.producers.values()).map(p => p.disconnect()));
        });
    }
    produce(topic, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let producer = this.producers.get(topic);
            if (!producer) {
                producer = new KafkaProducer(topic, this.broker);
                yield producer.connect();
                this.producers.set(topic, producer);
            }
            yield producer.produce(message);
        });
    }
}
exports.KafkaProducerService = KafkaProducerService;
class KafkaProducer {
    constructor(topic, broker) {
        this.topic = topic;
        this.client = new kafkajs_1.Kafka({ brokers: [broker] });
        this.producer = this.client.producer();
        this.logger = new common_1.Logger(`topic: ${this.topic}`);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.producer.connect();
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
            yield this.producer.disconnect();
        });
    }
    produce(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.producer.send({ topic: this.topic, messages: [message] });
        });
    }
}
exports.KafkaProducer = KafkaProducer;
