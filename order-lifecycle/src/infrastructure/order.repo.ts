import { Order } from "src/domain/order.entity";
import { IOrderRepo } from "src/domain/order.ports";

export class OrderRepo implements IOrderRepo {
    async getById(id: string): Promise<Order> {
        return new Order()
    }
    async save(order: Order): Promise<void> {
        console.log(`saving ${order}`)
    }
}