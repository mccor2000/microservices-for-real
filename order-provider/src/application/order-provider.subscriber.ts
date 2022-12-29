import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { KafkaConsumerService } from "@microservices-for-real/common";

@Injectable()
export class OrderProviderSubscriber implements OnModuleInit {
    constructor(
        @Inject('KAFKA_CONSUMER_SERVICE')
        private readonly consumerService: KafkaConsumerService
    ) { }

    async onModuleInit() {
        await this.consumerService.consume({
            topic: { topics: ['order-lifecycle'] },
            config: { 
                groupId: 'order-lifecycle-consumer', 
                rebalanceTimeout: 1000
            },
            onMessage: this.onOrderCreated
        })
    }

    async onOrderCreated(msg: any): Promise<void> {
        console.log(String(msg.key), String(msg.value))
    }
}