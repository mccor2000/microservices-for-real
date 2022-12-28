import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "order_lifecycle";
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
export declare const CreateOrderRequest: {
    encode(message: CreateOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrderRequest;
    fromJSON(object: any): CreateOrderRequest;
    toJSON(message: CreateOrderRequest): unknown;
    fromPartial<I extends {
        customerId?: string | undefined;
        merchantId?: string | undefined;
        items?: string[] | undefined;
        timestamp?: number | undefined;
    } & {
        customerId?: string | undefined;
        merchantId?: string | undefined;
        items?: (string[] & string[] & { [K in Exclude<keyof I["items"], keyof string[]>]: never; }) | undefined;
        timestamp?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CreateOrderRequest>]: never; }>(object: I): CreateOrderRequest;
};
export declare const CreateOrderResponse: {
    encode(_: CreateOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrderResponse;
    fromJSON(_: any): CreateOrderResponse;
    toJSON(_: CreateOrderResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): CreateOrderResponse;
};
export declare const ConfirmOrderRequest: {
    encode(message: ConfirmOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmOrderRequest;
    fromJSON(object: any): ConfirmOrderRequest;
    toJSON(message: ConfirmOrderRequest): unknown;
    fromPartial<I extends {
        orderId?: string | undefined;
    } & {
        orderId?: string | undefined;
    } & { [K in Exclude<keyof I, "orderId">]: never; }>(object: I): ConfirmOrderRequest;
};
export declare const ConfirmOrderResponse: {
    encode(_: ConfirmOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmOrderResponse;
    fromJSON(_: any): ConfirmOrderResponse;
    toJSON(_: ConfirmOrderResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): ConfirmOrderResponse;
};
export declare const CompleteOrderRequest: {
    encode(message: CompleteOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompleteOrderRequest;
    fromJSON(object: any): CompleteOrderRequest;
    toJSON(message: CompleteOrderRequest): unknown;
    fromPartial<I extends {
        orderId?: string | undefined;
    } & {
        orderId?: string | undefined;
    } & { [K in Exclude<keyof I, "orderId">]: never; }>(object: I): CompleteOrderRequest;
};
export declare const CompleteOrderResponse: {
    encode(_: CompleteOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompleteOrderResponse;
    fromJSON(_: any): CompleteOrderResponse;
    toJSON(_: CompleteOrderResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): CompleteOrderResponse;
};
export declare const CancelOrderRequest: {
    encode(message: CancelOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderRequest;
    fromJSON(object: any): CancelOrderRequest;
    toJSON(message: CancelOrderRequest): unknown;
    fromPartial<I extends {
        orderId?: string | undefined;
    } & {
        orderId?: string | undefined;
    } & { [K in Exclude<keyof I, "orderId">]: never; }>(object: I): CancelOrderRequest;
};
export declare const CancelOrderResponse: {
    encode(_: CancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderResponse;
    fromJSON(_: any): CancelOrderResponse;
    toJSON(_: CancelOrderResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): CancelOrderResponse;
};
export interface OrderLifecycleService {
    CreateOrder(request: CreateOrderRequest): Promise<CreateOrderResponse>;
    ConfirmOrder(request: ConfirmOrderRequest): Promise<ConfirmOrderResponse>;
    CompleteOrder(request: CompleteOrderRequest): Promise<CompleteOrderResponse>;
    CancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse>;
}
export declare class OrderLifecycleServiceClientImpl implements OrderLifecycleService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateOrder(request: CreateOrderRequest): Promise<CreateOrderResponse>;
    ConfirmOrder(request: ConfirmOrderRequest): Promise<ConfirmOrderResponse>;
    CompleteOrder(request: CompleteOrderRequest): Promise<CompleteOrderResponse>;
    CancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
