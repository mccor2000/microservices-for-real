import { Inject } from "@nestjs/common";
import { CreateOrderProps, Order } from "src/domain/order.entity";
import { IOrderEventPublisher, IOrderRepo, IOrderService, ORDER_EVENT_PUBLISHER, ORDER_REPO } from "src/domain/order.ports";

export class AppService implements IOrderService {
    constructor(
        @Inject(ORDER_REPO)
        readonly repo: IOrderRepo,
        @Inject(ORDER_EVENT_PUBLISHER)
        readonly publisher: IOrderEventPublisher,
    ) {}


    async create(props: CreateOrderProps): Promise<Order> {
        const order = Order.Create(props)

        await this.repo.save(order)
        await this.publisher.emit('order-created', {})

        return order
    }

    async confirm(id: string): Promise<Order> {
        const order = await this.repo.getById(id)
        if (!order) {
            throw new Error('order not found')
        }
        const confirmed = Order.Confirm(order)

        await this.repo.save(Order.Confirm(order))
        await this.publisher.emit('order-confirmed', {})

        return confirmed
    }

    async complete(id: string): Promise<Order> {
        const order = await this.repo.getById(id)
        if (!order) {
            throw new Error('order not found')
        }
        const completed = Order.Complete(order)

        await this.repo.save(order)
        await this.publisher.emit('order-completed', {})

        return completed
    }

    async cancel(id: string): Promise<Order> {
        const order = await this.repo.getById(id)
        if (!order) {
            throw new Error('order not found')
        }
        const cancelled = Order.Cancel(order)

        await this.repo.save(order)
        await this.publisher.emit('order-cancelled', {})

        return cancelled
    }
}