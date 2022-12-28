"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProviderServiceClientImpl = exports.OrderDto = exports.GetManyOrdersResponse = exports.GetManyOrdersRequest = exports.GetOrderByIdResponse = exports.GetOrderByIdRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var common_1 = require("./common");
exports.protobufPackage = "order_provider";
function createBaseGetOrderByIdRequest() {
    return { orderId: "" };
}
exports.GetOrderByIdRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orderId !== "") {
            writer.uint32(18).string(message.orderId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetOrderByIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
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
        var message = createBaseGetOrderByIdRequest();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetOrderByIdResponse() {
    return { order: undefined };
}
exports.GetOrderByIdResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.order !== undefined) {
            exports.OrderDto.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetOrderByIdResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = exports.OrderDto.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { order: isSet(object.order) ? exports.OrderDto.fromJSON(object.order) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.order !== undefined && (obj.order = message.order ? exports.OrderDto.toJSON(message.order) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetOrderByIdResponse();
        message.order = (object.order !== undefined && object.order !== null)
            ? exports.OrderDto.fromPartial(object.order)
            : undefined;
        return message;
    },
};
function createBaseGetManyOrdersRequest() {
    return { status: 0, offset: 0, limit: 0 };
}
exports.GetManyOrdersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.offset !== 0) {
            writer.uint32(16).int32(message.offset);
        }
        if (message.limit !== 0) {
            writer.uint32(24).int32(message.limit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetManyOrdersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.offset = reader.int32();
                    break;
                case 3:
                    message.limit = reader.int32();
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
            status: isSet(object.status) ? (0, common_1.orderStatusFromJSON)(object.status) : 0,
            offset: isSet(object.offset) ? Number(object.offset) : 0,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = (0, common_1.orderStatusToJSON)(message.status));
        message.offset !== undefined && (obj.offset = Math.round(message.offset));
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGetManyOrdersRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.offset = (_b = object.offset) !== null && _b !== void 0 ? _b : 0;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseGetManyOrdersResponse() {
    return { totalPage: 0, totalItems: 0, orders: [] };
}
exports.GetManyOrdersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.totalPage !== 0) {
            writer.uint32(8).int32(message.totalPage);
        }
        if (message.totalItems !== 0) {
            writer.uint32(16).int32(message.totalItems);
        }
        for (var _i = 0, _a = message.orders; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.OrderDto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetManyOrdersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalPage = reader.int32();
                    break;
                case 2:
                    message.totalItems = reader.int32();
                    break;
                case 3:
                    message.orders.push(exports.OrderDto.decode(reader, reader.uint32()));
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
            totalPage: isSet(object.totalPage) ? Number(object.totalPage) : 0,
            totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map(function (e) { return exports.OrderDto.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.totalPage !== undefined && (obj.totalPage = Math.round(message.totalPage));
        message.totalItems !== undefined && (obj.totalItems = Math.round(message.totalItems));
        if (message.orders) {
            obj.orders = message.orders.map(function (e) { return e ? exports.OrderDto.toJSON(e) : undefined; });
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGetManyOrdersResponse();
        message.totalPage = (_a = object.totalPage) !== null && _a !== void 0 ? _a : 0;
        message.totalItems = (_b = object.totalItems) !== null && _b !== void 0 ? _b : 0;
        message.orders = ((_c = object.orders) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.OrderDto.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseOrderDto() {
    return { id: "", items: [], status: 0, merchantId: "", customerId: "" };
}
exports.OrderDto = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (var _i = 0, _a = message.items; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.merchantId !== "") {
            writer.uint32(42).string(message.merchantId);
        }
        if (message.customerId !== "") {
            writer.uint32(50).string(message.customerId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderDto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.items.push(reader.string());
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.merchantId = reader.string();
                    break;
                case 6:
                    message.customerId = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map(function (e) { return String(e); }) : [],
            status: isSet(object.status) ? (0, common_1.orderStatusFromJSON)(object.status) : 0,
            merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
            customerId: isSet(object.customerId) ? String(object.customerId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.items) {
            obj.items = message.items.map(function (e) { return e; });
        }
        else {
            obj.items = [];
        }
        message.status !== undefined && (obj.status = (0, common_1.orderStatusToJSON)(message.status));
        message.merchantId !== undefined && (obj.merchantId = message.merchantId);
        message.customerId !== undefined && (obj.customerId = message.customerId);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseOrderDto();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.items = ((_b = object.items) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.merchantId = (_d = object.merchantId) !== null && _d !== void 0 ? _d : "";
        message.customerId = (_e = object.customerId) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
var OrderProviderServiceClientImpl = /** @class */ (function () {
    function OrderProviderServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "order_provider.OrderProviderService";
        this.rpc = rpc;
        this.GetOrderById = this.GetOrderById.bind(this);
        this.GetManyOrders = this.GetManyOrders.bind(this);
    }
    OrderProviderServiceClientImpl.prototype.GetOrderById = function (request) {
        var data = exports.GetOrderByIdRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetOrderById", data);
        return promise.then(function (data) { return exports.GetOrderByIdResponse.decode(new minimal_1.default.Reader(data)); });
    };
    OrderProviderServiceClientImpl.prototype.GetManyOrders = function (request) {
        var data = exports.GetManyOrdersRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetManyOrders", data);
        return promise.then(function (data) { return exports.GetManyOrdersResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return OrderProviderServiceClientImpl;
}());
exports.OrderProviderServiceClientImpl = OrderProviderServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
