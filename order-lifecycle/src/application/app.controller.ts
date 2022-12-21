import { Metadata } from '@grpc/grpc-js';
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Order } from 'src/domain/order.entity';

import { CancelOrderRequest, CompleteOrderRequest, ConfirmOrderRequest, CreateOrderRequest } from 'src/domain/order.interfaces';
import { IOrderService, ORDER_SERVICE } from 'src/domain/order.ports';

@Controller()
export class AppController {
  constructor(
    @Inject(ORDER_SERVICE)
    readonly service: IOrderService
  ) { }

  @GrpcMethod("OrderLifecycle", "CreateOrder")
  async createOrder(data: CreateOrderRequest, metadata: Metadata, ...rest: any[]): Promise<Order> {
    return this.service.create(data)
  }

  @GrpcMethod("OrderLifecycle", "ConfirmOrder")
  async confirmOrder(data: ConfirmOrderRequest, metadata: Metadata, ...rest: any[]): Promise<Order> {
    return this.service.confirm(data.orderId)
  }

  @GrpcMethod("OrderLifecycle", "CancelOrder")
  async completeOrder(data: CompleteOrderRequest, metadata: Metadata, ...rest: any[]): Promise<Order> {
    return this.service.complete(data.orderId)
  }

  @GrpcMethod("OrderLifecycle", "CancelOrder")
  async cancelOrder(data: CancelOrderRequest, metadata: Metadata, ...rest: any[]): Promise<Order> {
    return this.service.cancel(data.orderId)
  }
}