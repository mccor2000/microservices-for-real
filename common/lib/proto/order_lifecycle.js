"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLifecycleServiceClientImpl = exports.CancelOrderResponse = exports.CancelOrderRequest = exports.CompleteOrderResponse = exports.CompleteOrderRequest = exports.ConfirmOrderResponse = exports.ConfirmOrderRequest = exports.CreateOrderResponse = exports.CreateOrderRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "order_lifecycle";
function createBaseCreateOrderRequest() {
    return { customerId: "", merchantId: "", items: [], timestamp: 0 };
}
exports.CreateOrderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.customerId !== "") {
            writer.uint32(10).string(message.customerId);
        }
        if (message.merchantId !== "") {
            writer.uint32(18).string(message.merchantId);
        }
        for (var _i = 0, _a = message.items; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        if (message.timestamp !== 0) {
            writer.uint32(32).int64(message.timestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateOrderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            customerId: isSet(object.customerId) ? String(object.customerId) : "",
            merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
            items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map(function (e) { return String(e); }) : [],
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        message.merchantId !== undefined && (obj.merchantId = message.merchantId);
        if (message.items) {
            obj.items = message.items.map(function (e) { return e; });
        }
        else {
            obj.items = [];
        }
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCreateOrderRequest();
        message.customerId = (_a = object.customerId) !== null && _a !== void 0 ? _a : "";
        message.merchantId = (_b = object.merchantId) !== null && _b !== void 0 ? _b : "";
        message.items = ((_c = object.items) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseCreateOrderResponse() {
    return {};
}
exports.CreateOrderResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateOrderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseCreateOrderResponse();
        return message;
    },
};
function createBaseConfirmOrderRequest() {
    return { orderId: "" };
}
exports.ConfirmOrderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfirmOrderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfirmOrderRequest();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseConfirmOrderResponse() {
    return {};
}
exports.ConfirmOrderResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfirmOrderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseConfirmOrderResponse();
        return message;
    },
};
function createBaseCompleteOrderRequest() {
    return { orderId: "" };
}
exports.CompleteOrderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCompleteOrderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCompleteOrderRequest();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCompleteOrderResponse() {
    return {};
}
exports.CompleteOrderResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCompleteOrderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseCompleteOrderResponse();
        return message;
    },
};
function createBaseCancelOrderRequest() {
    return { orderId: "" };
}
exports.CancelOrderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCancelOrderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCancelOrderRequest();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCancelOrderResponse() {
    return {};
}
exports.CancelOrderResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCancelOrderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseCancelOrderResponse();
        return message;
    },
};
var OrderLifecycleServiceClientImpl = /** @class */ (function () {
    function OrderLifecycleServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "order_lifecycle.OrderLifecycleService";
        this.rpc = rpc;
        this.CreateOrder = this.CreateOrder.bind(this);
        this.ConfirmOrder = this.ConfirmOrder.bind(this);
        this.CompleteOrder = this.CompleteOrder.bind(this);
        this.CancelOrder = this.CancelOrder.bind(this);
    }
    OrderLifecycleServiceClientImpl.prototype.CreateOrder = function (request) {
        var data = exports.CreateOrderRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateOrder", data);
        return promise.then(function (data) { return exports.CreateOrderResponse.decode(new minimal_1.default.Reader(data)); });
    };
    OrderLifecycleServiceClientImpl.prototype.ConfirmOrder = function (request) {
        var data = exports.ConfirmOrderRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ConfirmOrder", data);
        return promise.then(function (data) { return exports.ConfirmOrderResponse.decode(new minimal_1.default.Reader(data)); });
    };
    OrderLifecycleServiceClientImpl.prototype.CompleteOrder = function (request) {
        var data = exports.CompleteOrderRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CompleteOrder", data);
        return promise.then(function (data) { return exports.CompleteOrderResponse.decode(new minimal_1.default.Reader(data)); });
    };
    OrderLifecycleServiceClientImpl.prototype.CancelOrder = function (request) {
        var data = exports.CancelOrderRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CancelOrder", data);
        return promise.then(function (data) { return exports.CancelOrderResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return OrderLifecycleServiceClientImpl;
}());
exports.OrderLifecycleServiceClientImpl = OrderLifecycleServiceClientImpl;
var tsProtoGlobalThis = (function () {
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
