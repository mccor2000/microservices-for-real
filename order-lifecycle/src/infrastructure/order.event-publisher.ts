import { Inject, Injectable, Logger } from "@nestjs/common";
import { KafkaService } from "@microservices-for-real/common";
import { IOrderEventPublisher } from "src/domain/order.ports";

@Injectable()
export class OrderEventPublisher implements IOrderEventPublisher {
    protected logger = new Logger(OrderEventPublisher.name)

    private readonly TOPIC = 'order.lifecycle'

    constructor(
        @Inject('KAFKA')
        private readonly client: KafkaService
    ) { }

    async publish(eventKey: string, data: any): Promise<void> {
        await this.client.connect()
        try {
            const result = await this.client.send({
                topic: this.TOPIC,
                messages: [{ key: eventKey, value: JSON.stringify(data) }]
            })
            console.log(result)
        } catch (err) {
            this.logger.error('sending event err', err)
        }
    }
}