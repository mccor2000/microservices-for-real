import { KafkaProducerService } from "@microservices-for-real/common";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { IOrderEventPublisher } from "src/domain/order.ports";

@Injectable()
export class OrderEventPublisher implements IOrderEventPublisher {
    protected logger = new Logger(OrderEventPublisher.name)

    constructor(
        @Inject('KAFKA_PRODUCER_SERVICE')
        private readonly producerService: KafkaProducerService
    ) { }

    async produce(eventTopic: string, eventKey: string, data: any): Promise<void> {
        return this.producerService.produce(eventTopic,
            {
                key: eventKey,
                value: JSON.stringify(data),
                partition: 1,
            }
        )
    }
}