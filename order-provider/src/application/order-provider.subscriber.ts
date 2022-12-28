import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { IHeaders, KafkaService, SubscribeTo } from "@microservices-for-real/common";

@Injectable()
export class OrderProviderSubscriber implements OnModuleInit {
    constructor(
        @Inject('KAFKA')
        private client: KafkaService
    ) { }

    onModuleInit(): void {
        this.client.subscribeToResponseOf('order.lifecycle', this)
    }

    @SubscribeTo('order.lifecycle')
    async getWorld(data: any, key: any, offset: number, timestamp: number, partition: number, headers: IHeaders): Promise<void> {
        console.log(data, key)
    }
}