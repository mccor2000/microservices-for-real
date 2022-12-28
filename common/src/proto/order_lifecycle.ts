/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "order_lifecycle";

export interface CreateOrderRequest {
  customerId: string;
  merchantId: string;
  items: string[];
  timestamp: number;
}

export interface CreateOrderResponse {
}

export interface ConfirmOrderRequest {
  orderId: string;
}

export interface ConfirmOrderResponse {
}

export interface CompleteOrderRequest {
  orderId: string;
}

export interface CompleteOrderResponse {
}

export interface CancelOrderRequest {
  orderId: string;
}

export interface CancelOrderResponse {
}

function createBaseCreateOrderRequest(): CreateOrderRequest {
  return { customerId: "", merchantId: "", items: [], timestamp: 0 };
}

export const CreateOrderRequest = {
  encode(message: CreateOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    if (message.merchantId !== "") {
      writer.uint32(18).string(message.merchantId);
    }
    for (const v of message.items) {
      writer.uint32(26).string(v!);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOrderRequest {
    return {
      customerId: isSet(object.customerId) ? String(object.customerId) : "",
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => String(e)) : [],
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CreateOrderRequest): unknown {
    const obj: any = {};
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.merchantId !== undefined && (obj.merchantId = message.merchantId);
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateOrderRequest>, I>>(object: I): CreateOrderRequest {
    const message = createBaseCreateOrderRequest();
    message.customerId = object.customerId ?? "";
    message.merchantId = object.merchantId ?? "";
    message.items = object.items?.map((e) => e) || [];
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCreateOrderResponse(): CreateOrderResponse {
  return {};
}

export const CreateOrderResponse = {
  encode(_: CreateOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): CreateOrderResponse {
    return {};
  },

  toJSON(_: CreateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateOrderResponse>, I>>(_: I): CreateOrderResponse {
    const message = createBaseCreateOrderResponse();
    return message;
  },
};

function createBaseConfirmOrderRequest(): ConfirmOrderRequest {
  return { orderId: "" };
}

export const ConfirmOrderRequest = {
  encode(message: ConfirmOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ConfirmOrderRequest {
    return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
  },

  toJSON(message: ConfirmOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmOrderRequest>, I>>(object: I): ConfirmOrderRequest {
    const message = createBaseConfirmOrderRequest();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseConfirmOrderResponse(): ConfirmOrderResponse {
  return {};
}

export const ConfirmOrderResponse = {
  encode(_: ConfirmOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): ConfirmOrderResponse {
    return {};
  },

  toJSON(_: ConfirmOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmOrderResponse>, I>>(_: I): ConfirmOrderResponse {
    const message = createBaseConfirmOrderResponse();
    return message;
  },
};

function createBaseCompleteOrderRequest(): CompleteOrderRequest {
  return { orderId: "" };
}

export const CompleteOrderRequest = {
  encode(message: CompleteOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompleteOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): CompleteOrderRequest {
    return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
  },

  toJSON(message: CompleteOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompleteOrderRequest>, I>>(object: I): CompleteOrderRequest {
    const message = createBaseCompleteOrderRequest();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseCompleteOrderResponse(): CompleteOrderResponse {
  return {};
}

export const CompleteOrderResponse = {
  encode(_: CompleteOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompleteOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): CompleteOrderResponse {
    return {};
  },

  toJSON(_: CompleteOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompleteOrderResponse>, I>>(_: I): CompleteOrderResponse {
    const message = createBaseCompleteOrderResponse();
    return message;
  },
};

function createBaseCancelOrderRequest(): CancelOrderRequest {
  return { orderId: "" };
}

export const CancelOrderRequest = {
  encode(message: CancelOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): CancelOrderRequest {
    return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
  },

  toJSON(message: CancelOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelOrderRequest>, I>>(object: I): CancelOrderRequest {
    const message = createBaseCancelOrderRequest();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseCancelOrderResponse(): CancelOrderResponse {
  return {};
}

export const CancelOrderResponse = {
  encode(_: CancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): CancelOrderResponse {
    return {};
  },

  toJSON(_: CancelOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelOrderResponse>, I>>(_: I): CancelOrderResponse {
    const message = createBaseCancelOrderResponse();
    return message;
  },
};

export interface OrderLifecycleService {
  CreateOrder(request: CreateOrderRequest): Promise<CreateOrderResponse>;
  ConfirmOrder(request: ConfirmOrderRequest): Promise<ConfirmOrderResponse>;
  CompleteOrder(request: CompleteOrderRequest): Promise<CompleteOrderResponse>;
  CancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse>;
}

export class OrderLifecycleServiceClientImpl implements OrderLifecycleService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "order_lifecycle.OrderLifecycleService";
    this.rpc = rpc;
    this.CreateOrder = this.CreateOrder.bind(this);
    this.ConfirmOrder = this.ConfirmOrder.bind(this);
    this.CompleteOrder = this.CompleteOrder.bind(this);
    this.CancelOrder = this.CancelOrder.bind(this);
  }
  CreateOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    const data = CreateOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateOrder", data);
    return promise.then((data) => CreateOrderResponse.decode(new _m0.Reader(data)));
  }

  ConfirmOrder(request: ConfirmOrderRequest): Promise<ConfirmOrderResponse> {
    const data = ConfirmOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConfirmOrder", data);
    return promise.then((data) => ConfirmOrderResponse.decode(new _m0.Reader(data)));
  }

  CompleteOrder(request: CompleteOrderRequest): Promise<CompleteOrderResponse> {
    const data = CompleteOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CompleteOrder", data);
    return promise.then((data) => CompleteOrderResponse.decode(new _m0.Reader(data)));
  }

  CancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    const data = CancelOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelOrder", data);
    return promise.then((data) => CancelOrderResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
