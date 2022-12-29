import { Inject } from "@nestjs/common";
import {
    OrderLifecycleService,
    CreateOrderRequest,
    CreateOrderResponse,
    ConfirmOrderRequest,
    ConfirmOrderResponse,
    CompleteOrderRequest,
    CompleteOrderResponse,
    CancelOrderRequest,
    CancelOrderResponse,
} from "@microservices-for-real/common";
import {
    IOrderEventPublisher,
    IOrderRepo,
    ORDER_EVENT_PUBLISHER,
    ORDER_REPO
} from "src/domain/order.ports";

import { Order } from "src/domain/order.entity";

export class AppService implements OrderLifecycleService {
    constructor(
        @Inject(ORDER_REPO)
        readonly repo: IOrderRepo,
        @Inject(ORDER_EVENT_PUBLISHER)
        readonly publisher: IOrderEventPublisher,
    ) { }


    async CreateOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
        const order = Order.Create(request)

        await this.repo.save(order)
        await this.publisher.produce('order-lifecycle', order.id, { order })

        return order
    }

    async ConfirmOrder({ orderId }: ConfirmOrderRequest): Promise<ConfirmOrderResponse> {
        const order = await this.repo.getById(orderId)
        if (!order) {
            throw new Error('order not found')
        }
        const confirmed = Order.Confirm(order)

        await this.repo.save(Order.Confirm(order))
        await this.publisher.produce('order-lifecycle', orderId, { order })

        return confirmed
    }

    async CompleteOrder({ orderId }: CompleteOrderRequest): Promise<CompleteOrderResponse> {
        const order = await this.repo.getById(orderId)
        if (!order) {
            throw new Error('order not found')
        }
        const completed = Order.Complete(order)

        await this.repo.save(order)
        await this.publisher.produce('order-lifecycle', orderId, { order })

        return completed
    }

    async CancelOrder({ orderId }: CancelOrderRequest): Promise<CancelOrderResponse> {
        const order = await this.repo.getById(orderId)
        if (!order) {
            throw new Error('order not found')
        }
        const cancelled = Order.Cancel(order)

        await this.repo.save(order)
        await this.publisher.produce('order-lifcycle', orderId, { order })

        return cancelled
    }
}