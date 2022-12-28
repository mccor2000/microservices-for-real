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
exports.KafkaAvroResponseDeserializer = void 0;
const logger_service_1 = require("@nestjs/common/services/logger.service");
const confluent_schema_registry_1 = require("@kafkajs/confluent-schema-registry");
const kafka_response_deserializer_1 = require("./kafka-response.deserializer");
class KafkaAvroResponseDeserializer {
    constructor(config, options) {
        this.logger = new logger_service_1.Logger(KafkaAvroResponseDeserializer.name);
        this.registry = new confluent_schema_registry_1.SchemaRegistry(config, options);
        this.fallback = new kafka_response_deserializer_1.KafkaResponseDeserializer();
    }
    deserialize(message, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { value, key, timestamp, offset } = message;
            const decodeResponse = {
                response: value,
                key,
                timestamp,
                offset,
            };
            try {
                decodeResponse.key = (((_a = message.key) === null || _a === void 0 ? void 0 : _a.length) > 0) ? yield this.registry.decode(message.key) : null;
                decodeResponse.response = (message.value) ? yield this.registry.decode(message.value) : message.value;
            }
            catch (e) {
                this.logger.error(e);
                // Fall back to the normal kafka deserialize.
                const msg = this.fallback.deserialize(message);
                Object.assign(decodeResponse, msg);
            }
            return decodeResponse;
        });
    }
}
exports.KafkaAvroResponseDeserializer = KafkaAvroResponseDeserializer;
