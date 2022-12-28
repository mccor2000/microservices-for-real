/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { OrderStatus, orderStatusFromJSON, orderStatusToJSON } from "./common";

export const protobufPackage = "order_provider";

export interface GetOrderByIdRequest {
  orderId: string;
}

export interface GetOrderByIdResponse {
  order: OrderDto | undefined;
}

export interface GetManyOrdersRequest {
  status: OrderStatus;
  offset: number;
  limit: number;
}

export interface GetManyOrdersResponse {
  totalPage: number;
  totalItems: number;
  orders: OrderDto[];
}

export interface OrderDto {
  id: string;
  items: string[];
  status: OrderStatus;
  merchantId: string;
  customerId: string;
}

function createBaseGetOrderByIdRequest(): GetOrderByIdRequest {
  return { orderId: "" };
}

export const GetOrderByIdRequest = {
  encode(message: GetOrderByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GetOrderByIdRequest {
    return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
  },

  toJSON(message: GetOrderByIdRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOrderByIdRequest>, I>>(object: I): GetOrderByIdRequest {
    const message = createBaseGetOrderByIdRequest();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseGetOrderByIdResponse(): GetOrderByIdResponse {
  return { order: undefined };
}

export const GetOrderByIdResponse = {
  encode(message: GetOrderByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      OrderDto.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = OrderDto.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrderByIdResponse {
    return { order: isSet(object.order) ? OrderDto.fromJSON(object.order) : undefined };
  },

  toJSON(message: GetOrderByIdResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? OrderDto.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOrderByIdResponse>, I>>(object: I): GetOrderByIdResponse {
    const message = createBaseGetOrderByIdResponse();
    message.order = (object.order !== undefined && object.order !== null)
      ? OrderDto.fromPartial(object.order)
      : undefined;
    return message;
  },
};

function createBaseGetManyOrdersRequest(): GetManyOrdersRequest {
  return { status: 0, offset: 0, limit: 0 };
}

export const GetManyOrdersRequest = {
  encode(message: GetManyOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GetManyOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetManyOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
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

  fromJSON(object: any): GetManyOrdersRequest {
    return {
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: GetManyOrdersRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = orderStatusToJSON(message.status));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetManyOrdersRequest>, I>>(object: I): GetManyOrdersRequest {
    const message = createBaseGetManyOrdersRequest();
    message.status = object.status ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseGetManyOrdersResponse(): GetManyOrdersResponse {
  return { totalPage: 0, totalItems: 0, orders: [] };
}

export const GetManyOrdersResponse = {
  encode(message: GetManyOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalPage !== 0) {
      writer.uint32(8).int32(message.totalPage);
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int32(message.totalItems);
    }
    for (const v of message.orders) {
      OrderDto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetManyOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetManyOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPage = reader.int32();
          break;
        case 2:
          message.totalItems = reader.int32();
          break;
        case 3:
          message.orders.push(OrderDto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetManyOrdersResponse {
    return {
      totalPage: isSet(object.totalPage) ? Number(object.totalPage) : 0,
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => OrderDto.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetManyOrdersResponse): unknown {
    const obj: any = {};
    message.totalPage !== undefined && (obj.totalPage = Math.round(message.totalPage));
    message.totalItems !== undefined && (obj.totalItems = Math.round(message.totalItems));
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? OrderDto.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetManyOrdersResponse>, I>>(object: I): GetManyOrdersResponse {
    const message = createBaseGetManyOrdersResponse();
    message.totalPage = object.totalPage ?? 0;
    message.totalItems = object.totalItems ?? 0;
    message.orders = object.orders?.map((e) => OrderDto.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrderDto(): OrderDto {
  return { id: "", items: [], status: 0, merchantId: "", customerId: "" };
}

export const OrderDto = {
  encode(message: OrderDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.items) {
      writer.uint32(18).string(v!);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.items.push(reader.string());
          break;
        case 3:
          message.status = reader.int32() as any;
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

  fromJSON(object: any): OrderDto {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => String(e)) : [],
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      customerId: isSet(object.customerId) ? String(object.customerId) : "",
    };
  },

  toJSON(message: OrderDto): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    message.status !== undefined && (obj.status = orderStatusToJSON(message.status));
    message.merchantId !== undefined && (obj.merchantId = message.merchantId);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderDto>, I>>(object: I): OrderDto {
    const message = createBaseOrderDto();
    message.id = object.id ?? "";
    message.items = object.items?.map((e) => e) || [];
    message.status = object.status ?? 0;
    message.merchantId = object.merchantId ?? "";
    message.customerId = object.customerId ?? "";
    return message;
  },
};

export interface OrderProviderService {
  GetOrderById(request: GetOrderByIdRequest): Promise<GetOrderByIdResponse>;
  GetManyOrders(request: GetManyOrdersRequest): Promise<GetManyOrdersResponse>;
}

export class OrderProviderServiceClientImpl implements OrderProviderService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "order_provider.OrderProviderService";
    this.rpc = rpc;
    this.GetOrderById = this.GetOrderById.bind(this);
    this.GetManyOrders = this.GetManyOrders.bind(this);
  }
  GetOrderById(request: GetOrderByIdRequest): Promise<GetOrderByIdResponse> {
    const data = GetOrderByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOrderById", data);
    return promise.then((data) => GetOrderByIdResponse.decode(new _m0.Reader(data)));
  }

  GetManyOrders(request: GetManyOrdersRequest): Promise<GetManyOrdersResponse> {
    const data = GetManyOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetManyOrders", data);
    return promise.then((data) => GetManyOrdersResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
