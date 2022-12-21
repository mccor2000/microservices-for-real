import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './application/app.controller';
import { AppService } from './application/app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_LIFECYCLE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'order-lifecycle',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'orderlifecycle-consumer'
          }
        }
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
