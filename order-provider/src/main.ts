import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { OrderProviderModule } from './order-provider.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(OrderProviderModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3003',
      package: 'order_provider',
      protoPath: [
        join(__dirname, '../../proto/common.proto'),
        join(__dirname, '../../proto/order_provider.proto')
      ]
    }
  });

  await app.listen();
}
bootstrap();
