import { Module } from '@nestjs/common';
import { KafkaModule } from '@microservices-for-real/common';
import { ORDER_EVENT_PUBLISHER, ORDER_REPO, ORDER_SERVICE } from 'src/domain/order.ports';

import { OrderEventPublisher } from 'src/infrastructure/order.event-publisher';
import { OrderRepo } from 'src/infrastructure/order.repo';

import { OrderLifecycle } from './application/order-lifecycle.controller';
import { AppService } from './application/order-lifecycle.service';
import { Partitioners } from 'kafkajs';

@Module({
  imports: [
    KafkaModule.register([
      {
        name: "KAFKA",
        options: {
          client: {
            clientId: 'order-lifecycle',
            brokers: ['localhost:9092'],
          },
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner 
          }
        }
      }
    ])
  ],
  controllers: [OrderLifecycle],
  providers: [
    {
      provide: ORDER_SERVICE,
      useClass: AppService,
    },
    {
      provide: ORDER_REPO,
      useClass: OrderRepo,
    },
    {
      provide: ORDER_EVENT_PUBLISHER,
      useClass: OrderEventPublisher,
    }
  ],
})
export class OrderLifecycleModule { }