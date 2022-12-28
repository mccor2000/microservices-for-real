import { Module } from '@nestjs/common';
import { KafkaModule } from '@microservices-for-real/common';
import { OrderProvider} from './application/order-provider.controller';
import { OrderProviderSubscriber } from './application/order-provider.subscriber';

@Module({
  imports: [
    KafkaModule.register([
      {
        name: 'KAFKA',
        options: {
          client: {
            clientId: 'order-provider',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'order-lifecycle-consumer'
          }
        }
      },
    ]),

  ],
  controllers: [OrderProvider],
  providers: [OrderProviderSubscriber],
})
export class OrderProviderModule {}

