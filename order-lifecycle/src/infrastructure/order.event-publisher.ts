import { IOrderEventPublisher } from "src/domain/order.ports";

export class OrderEventPublisher implements IOrderEventPublisher {
    async emit(eventKey: string, event: any): Promise<void> {
       console.log(`sending ${eventKey}, data: ${event}`) 
    }
}