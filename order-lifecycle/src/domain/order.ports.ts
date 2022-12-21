import { CreateOrderProps, Order } from "./order.entity";

// for dependency injection
export const ORDER_SERVICE = 'order_service'
export const ORDER_REPO = 'order_repo'
export const ORDER_EVENT_PUBLISHER = 'order_event_publisher'

// primary
export interface IOrderService {
    create(props: CreateOrderProps): Promise<Order>
    confirm(id): Promise<Order>
    complete(id): Promise<Order>
    cancel(id): Promise<Order>
}

// secondaries
export interface IOrderRepo {
    getById(id: string): Promise<Order>
    save(order: Order): Promise<void>
}

export interface IOrderEventPublisher {
    emit(eventKey: string, event: any): Promise<void>
}