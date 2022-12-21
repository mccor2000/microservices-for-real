import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Controller()
export class AppController implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'order_lifecycle',
      protoPath: join(__dirname, '../../proto/order_lifecycle.proto'),
    },
  })
  client: ClientGrpc;

  private orderLifecycle: any

  onModuleInit() {
    this.orderLifecycle = this.client.getService('OrderLifecycle')
  }

  @Post('/orders')
  createOrder(@Body() dto: any): any {
    return this.orderLifecycle.createOrder(dto);
  }
}
