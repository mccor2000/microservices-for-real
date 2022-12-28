"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaResponseDeserializer = void 0;
var KafkaResponseDeserializer = /** @class */ (function () {
    function KafkaResponseDeserializer() {
    }
    KafkaResponseDeserializer.prototype.deserialize = function (message, options) {
        var key = message.key, value = message.value, timestamp = message.timestamp, offset = message.offset, headers = message.headers;
        var id = key;
        var response = value;
        if (Buffer.isBuffer(key)) {
            id = Buffer.from(key).toString();
        }
        if (Buffer.isBuffer(value)) {
            response = Buffer.from(value).toString();
        }
        Object.keys(headers).forEach(function (key) {
            if (Buffer.isBuffer(headers[key])) {
                headers[key] = Buffer.from(headers[key]).toString();
            }
        });
        return {
            key: id,
            response: response,
            timestamp: timestamp,
            offset: offset,
            headers: headers,
        };
    };
    return KafkaResponseDeserializer;
}());
exports.KafkaResponseDeserializer = KafkaResponseDeserializer;
