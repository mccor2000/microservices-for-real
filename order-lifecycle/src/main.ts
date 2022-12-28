import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { OrderLifecycleModule } from './order-lifecycle.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(OrderLifecycleModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3001',
      package: 'order_lifecycle',
      protoPath: join(__dirname, '../../proto/order_lifecycle.proto'),
    }
  });

  await app.listen();
}
bootstrap();
