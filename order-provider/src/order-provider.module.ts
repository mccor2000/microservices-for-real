import { Module } from '@nestjs/common';
import { EventPubSubModule} from '@microservices-for-real/common';

import { OrderProvider} from './application/order-provider.controller';
import { OrderProviderSubscriber } from './application/order-provider.subscriber';

@Module({
  imports: [
    EventPubSubModule
  ],
  controllers: [OrderProvider],
  providers: [OrderProviderSubscriber],
})
export class OrderProviderModule {}

