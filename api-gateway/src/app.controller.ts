import { Body, Controller, DefaultValuePipe, Get, OnModuleInit, Param, ParseArrayPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CreateOrderRequest, OrderLifecycleService } from "@microservices-for-real/common"

@Controller()
export class AppController implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3001',
      package: 'order_lifecycle',
      protoPath: join(__dirname, '../../proto/order_lifecycle.proto'),
    },
  })
  private client: ClientGrpc;

  private orderLifecycle: OrderLifecycleService

  onModuleInit() {
    this.orderLifecycle = this.client.getService<OrderLifecycleService>('OrderLifecycleService')
  }

  // @Post('/signup')
  // signUp(
  //   @Body() dto: any
  // ) {

  // }

  // @Post('/signin')
  // signIn(
  //   @Body() dto: any
  // ) {

  // }

  // @Get('/orders')
  // getManyOrders(
  //   @Param('offset', new DefaultValuePipe(0), new ParseIntPipe()) offset: number,
  //   @Param('limit', new DefaultValuePipe(20), new ParseIntPipe()) limit: number,
  //   @Param('status', new DefaultValuePipe(20), new ParseIntPipe()) status: number,
  //   @Param('fields', new ParseArrayPipe({ items: String })) fields: number

  //   // @User('id') userId: string
  // ) {

  // }

  @Post('/orders')
  createOrder(
    @Body() dto: CreateOrderRequest,
  ): any {
    return this.orderLifecycle.CreateOrder(dto);
  }

  // @Get('/orders/:id')
  // getOrderById(
  //   @Param('fields', new ParseArrayPipe({ items: String })) fields: number

  //   // @User('id') userId: string
  // ) {

  // }

  // @Put('/orders/:id')
  // updateOrder(
  //   @Param('opcode', new ParseIntPipe()) opcode: number,
  //   @Body() dto: any,

  //   // @User('id') userId: string
  // ): any {
  //   // return this.orderLifecycle.(dto);
  // }
}
