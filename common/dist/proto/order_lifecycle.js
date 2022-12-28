"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLifecycleServiceClientImpl = exports.CancelOrderResponse = exports.CancelOrderRequest = exports.CompleteOrderResponse = exports.CompleteOrderRequest = exports.ConfirmOrderResponse = exports.ConfirmOrderRequest = exports.CreateOrderResponse = exports.CreateOrderRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "order_lifecycle";
function createBaseCreateOrderRequest() {
    return { customerId: "", merchantId: "", items: [], timestamp: 0 };
}
exports.CreateOrderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.customerId !== "") {
            writer.uint32(10).string(message.customerId);
        }
        if (message.merchantId !== "") {
            writer.uint32(18).string(message.merchantId);
        }
        for (const v of message.items) {
            writer.uint32(26).string(v);
        }
        if (message.timestamp !== 0) {
            writer.uint32(32).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.string();
                    break;
                case 2:
                    message.merchantId = reader.string();
                    break;
                case 3:
                    message.items.push(reader.string());
                    break;
                case 4:
                    message.timestamp = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            customerId: isSet(object.customerId) ? String(object.customerId) : "",
            merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
            items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map((e) => String(e)) : [],
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        message.merchantId !== undefined && (obj.merchantId = message.merchantId);
        if (message.items) {
            obj.items = message.items.map((e) => e);
        }
        else {
            obj.items = [];
        }
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCreateOrderRequest();
        message.customerId = (_a = object.customerId) !== null && _a !== void 0 ? _a : "";
        message.merchantId = (_b = object.merchantId) !== null && _b !== void 0 ? _b : "";
        message.items = ((_c = object.items) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseCreateOrderResponse() {
    return {};
}
exports.CreateOrderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseCreateOrderResponse();
        return message;
    },
};
function createBaseConfirmOrderRequest() {
    return { orderId: "" };
}
exports.ConfirmOrderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConfirmOrderRequest();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseConfirmOrderResponse() {
    return {};
}
exports.ConfirmOrderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseConfirmOrderResponse();
        return message;
    },
};
function createBaseCompleteOrderRequest() {
    return { orderId: "" };
}
exports.CompleteOrderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompleteOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCompleteOrderRequest();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCompleteOrderResponse() {
    return {};
}
exports.CompleteOrderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompleteOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseCompleteOrderResponse();
        return message;
    },
};
function createBaseCancelOrderRequest() {
    return { orderId: "" };
}
exports.CancelOrderRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCancelOrderRequest();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCancelOrderResponse() {
    return {};
}
exports.CancelOrderResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseCancelOrderResponse();
        return message;
    },
};
class OrderLifecycleServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "order_lifecycle.OrderLifecycleService";
        this.rpc = rpc;
        this.CreateOrder = this.CreateOrder.bind(this);
        this.ConfirmOrder = this.ConfirmOrder.bind(this);
        this.CompleteOrder = this.CompleteOrder.bind(this);
        this.CancelOrder = this.CancelOrder.bind(this);
    }
    CreateOrder(request) {
        const data = exports.CreateOrderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateOrder", data);
        return promise.then((data) => exports.CreateOrderResponse.decode(new minimal_1.default.Reader(data)));
    }
    ConfirmOrder(request) {
        const data = exports.ConfirmOrderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ConfirmOrder", data);
        return promise.then((data) => exports.ConfirmOrderResponse.decode(new minimal_1.default.Reader(data)));
    }
    CompleteOrder(request) {
        const data = exports.CompleteOrderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CompleteOrder", data);
        return promise.then((data) => exports.CompleteOrderResponse.decode(new minimal_1.default.Reader(data)));
    }
    CancelOrder(request) {
        const data = exports.CancelOrderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelOrder", data);
        return promise.then((data) => exports.CancelOrderResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.OrderLifecycleServiceClientImpl = OrderLifecycleServiceClientImpl;
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
