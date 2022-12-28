"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPubSubModule = void 0;
const common_1 = require("@nestjs/common");
const kafka_consumer_1 = require("./kafka/kafka.consumer");
const kafka_producer_1 = require("./kafka/kafka.producer");
let EventPubSubModule = class EventPubSubModule {
};
EventPubSubModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: 'KAFKA_CONSUMER_SERVICE',
                useClass: kafka_consumer_1.KafkaConsumerService
            },
            {
                provide: 'KAFKA_PRODUCER_SERVICE',
                useClass: kafka_producer_1.KafkaProducerService
            },
        ],
        exports: [
            {
                provide: 'KAFKA_CONSUMER_SERVICE',
                useClass: kafka_consumer_1.KafkaConsumerService
            },
            {
                provide: 'KAFKA_PRODUCER_SERVICE',
                useClass: kafka_producer_1.KafkaProducerService
            },
        ],
    })
], EventPubSubModule);
exports.EventPubSubModule = EventPubSubModule;
