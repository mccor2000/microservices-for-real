import { Module } from '@nestjs/common';
import { ORDER_EVENT_PUBLISHER, ORDER_REPO, ORDER_SERVICE } from 'src/domain/order.ports';

import { OrderEventPublisher } from 'src/infrastructure/order.event-publisher';
import { OrderRepo } from 'src/infrastructure/order.repo';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
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
export class AppModule { }
