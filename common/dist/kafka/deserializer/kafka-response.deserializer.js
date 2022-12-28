"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaResponseDeserializer = void 0;
class KafkaResponseDeserializer {
    deserialize(message, options) {
        const { key, value, timestamp, offset, headers } = message;
        let id = key;
        let response = value;
        if (Buffer.isBuffer(key)) {
            id = Buffer.from(key).toString();
        }
        if (Buffer.isBuffer(value)) {
            response = Buffer.from(value).toString();
        }
        Object.keys(headers).forEach((key) => {
            if (Buffer.isBuffer(headers[key])) {
                headers[key] = Buffer.from(headers[key]).toString();
            }
        });
        return {
            key: id,
            response,
            timestamp,
            offset,
            headers,
        };
    }
}
exports.KafkaResponseDeserializer = KafkaResponseDeserializer;
