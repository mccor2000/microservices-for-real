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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaAvroResponseDeserializer = void 0;
var logger_service_1 = require("@nestjs/common/services/logger.service");
var confluent_schema_registry_1 = require("@kafkajs/confluent-schema-registry");
var kafka_response_deserializer_1 = require("./kafka-response.deserializer");
var KafkaAvroResponseDeserializer = /** @class */ (function () {
    function KafkaAvroResponseDeserializer(config, options) {
        this.logger = new logger_service_1.Logger(KafkaAvroResponseDeserializer.name);
        this.registry = new confluent_schema_registry_1.SchemaRegistry(config, options);
        this.fallback = new kafka_response_deserializer_1.KafkaResponseDeserializer();
    }
    KafkaAvroResponseDeserializer.prototype.deserialize = function (message, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var value, key, timestamp, offset, decodeResponse, _b, _c, _d, _e, e_1, msg;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        value = message.value, key = message.key, timestamp = message.timestamp, offset = message.offset;
                        decodeResponse = {
                            response: value,
                            key: key,
                            timestamp: timestamp,
                            offset: offset,
                        };
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 8, , 9]);
                        _b = decodeResponse;
                        if (!(((_a = message.key) === null || _a === void 0 ? void 0 : _a.length) > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.registry.decode(message.key)];
                    case 2:
                        _c = _f.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _c = null;
                        _f.label = 4;
                    case 4:
                        _b.key = _c;
                        _d = decodeResponse;
                        if (!(message.value)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.registry.decode(message.value)];
                    case 5:
                        _e = _f.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _e = message.value;
                        _f.label = 7;
                    case 7:
                        _d.response = _e;
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _f.sent();
                        this.logger.error(e_1);
                        msg = this.fallback.deserialize(message);
                        Object.assign(decodeResponse, msg);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, decodeResponse];
                }
            });
        });
    };
    return KafkaAvroResponseDeserializer;
}());
exports.KafkaAvroResponseDeserializer = KafkaAvroResponseDeserializer;
