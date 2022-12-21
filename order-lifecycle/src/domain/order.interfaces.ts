import { Order } from "./order.entity";

export interface CreateOrderRequest {
    customerId: string;
    merchantId: string;
    item: string;
    quantity: number;
}

export interface CreateOrderReply {
    order: Order
}

export interface ConfirmOrderRequest {
    orderId: string;
}

export interface ConfirmOrderReply {
    order: Order
}

export interface CompleteOrderRequest {
    orderId: string;
}

export interface CompleteOrdeReply {
    order: Order
}

export interface CancelOrderRequest {
    orderId: string;
    reason: string;
}

export interface CancelOrdeReply {
    order: Order
}