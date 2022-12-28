import { Inject, Injectable, Logger } from "@nestjs/common";
import { IOrderEventPublisher } from "src/domain/order.ports";

@Injectable()
export class OrderEventPublisher implements IOrderEventPublisher {
    protected logger = new Logger(OrderEventPublisher.name)

    constructor(
        @Inject('KAFKA_PRODUCER_SERVICE')
        private readonly producerService: IOrderEventPublisher
    ) { }

    async produce(eventKey: string, data: any): Promise<void> {
        return this.producerService.produce(eventKey,
            {
                key: eventKey,
                value: JSON.stringify(data)
            }
        )
    }
}