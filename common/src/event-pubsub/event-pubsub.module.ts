import { Module } from "@nestjs/common";
import { KafkaConsumerService } from "./kafka/kafka.consumer";
import { KafkaProducerService } from "./kafka/kafka.producer";

@Module({
    imports: [],
    providers: [
        {
            provide: 'KAFKA_CONSUMER_SERVICE',
            useClass: KafkaConsumerService
        },
        {
            provide: 'KAFKA_PRODUCER_SERVICE',
            useClass: KafkaProducerService
        },
    ],
    exports: [
        {
            provide: 'KAFKA_CONSUMER_SERVICE',
            useClass: KafkaConsumerService
        },
        {
            provide: 'KAFKA_PRODUCER_SERVICE',
            useClass: KafkaProducerService
        },
    ],
})
export class EventPubSubModule {}