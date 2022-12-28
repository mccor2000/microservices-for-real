import _m0 from "protobufjs/minimal";
import { OrderStatus } from "./common";
export declare const protobufPackage = "order_provider";
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
export declare const GetOrderByIdRequest: {
    encode(message: GetOrderByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderByIdRequest;
    fromJSON(object: any): GetOrderByIdRequest;
    toJSON(message: GetOrderByIdRequest): unknown;
    fromPartial<I extends {
        orderId?: string | undefined;
    } & {
        orderId?: string | undefined;
    } & { [K in Exclude<keyof I, "orderId">]: never; }>(object: I): GetOrderByIdRequest;
};
export declare const GetOrderByIdResponse: {
    encode(message: GetOrderByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderByIdResponse;
    fromJSON(object: any): GetOrderByIdResponse;
    toJSON(message: GetOrderByIdResponse): unknown;
    fromPartial<I extends {
        order?: {
            id?: string | undefined;
            items?: string[] | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        } | undefined;
    } & {
        order?: ({
            id?: string | undefined;
            items?: string[] | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        } & {
            id?: string | undefined;
            items?: (string[] & string[] & { [K in Exclude<keyof I["order"]["items"], keyof string[]>]: never; }) | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        } & { [K_1 in Exclude<keyof I["order"], keyof OrderDto>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "order">]: never; }>(object: I): GetOrderByIdResponse;
};
export declare const GetManyOrdersRequest: {
    encode(message: GetManyOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetManyOrdersRequest;
    fromJSON(object: any): GetManyOrdersRequest;
    toJSON(message: GetManyOrdersRequest): unknown;
    fromPartial<I extends {
        status?: OrderStatus | undefined;
        offset?: number | undefined;
        limit?: number | undefined;
    } & {
        status?: OrderStatus | undefined;
        offset?: number | undefined;
        limit?: number | undefined;
    } & { [K in Exclude<keyof I, keyof GetManyOrdersRequest>]: never; }>(object: I): GetManyOrdersRequest;
};
export declare const GetManyOrdersResponse: {
    encode(message: GetManyOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetManyOrdersResponse;
    fromJSON(object: any): GetManyOrdersResponse;
    toJSON(message: GetManyOrdersResponse): unknown;
    fromPartial<I extends {
        totalPage?: number | undefined;
        totalItems?: number | undefined;
        orders?: {
            id?: string | undefined;
            items?: string[] | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        }[] | undefined;
    } & {
        totalPage?: number | undefined;
        totalItems?: number | undefined;
        orders?: ({
            id?: string | undefined;
            items?: string[] | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            items?: string[] | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        } & {
            id?: string | undefined;
            items?: (string[] & string[] & { [K in Exclude<keyof I["orders"][number]["items"], keyof string[]>]: never; }) | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        } & { [K_1 in Exclude<keyof I["orders"][number], keyof OrderDto>]: never; })[] & { [K_2 in Exclude<keyof I["orders"], keyof {
            id?: string | undefined;
            items?: string[] | undefined;
            status?: OrderStatus | undefined;
            merchantId?: string | undefined;
            customerId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof GetManyOrdersResponse>]: never; }>(object: I): GetManyOrdersResponse;
};
export declare const OrderDto: {
    encode(message: OrderDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderDto;
    fromJSON(object: any): OrderDto;
    toJSON(message: OrderDto): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        items?: string[] | undefined;
        status?: OrderStatus | undefined;
        merchantId?: string | undefined;
        customerId?: string | undefined;
    } & {
        id?: string | undefined;
        items?: (string[] & string[] & { [K in Exclude<keyof I["items"], keyof string[]>]: never; }) | undefined;
        status?: OrderStatus | undefined;
        merchantId?: string | undefined;
        customerId?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof OrderDto>]: never; }>(object: I): OrderDto;
};
export interface OrderProviderService {
    GetOrderById(request: GetOrderByIdRequest): Promise<GetOrderByIdResponse>;
    GetManyOrders(request: GetManyOrdersRequest): Promise<GetManyOrdersResponse>;
}
export declare class OrderProviderServiceClientImpl implements OrderProviderService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetOrderById(request: GetOrderByIdRequest): Promise<GetOrderByIdResponse>;
    GetManyOrders(request: GetManyOrdersRequest): Promise<GetManyOrdersResponse>;
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
