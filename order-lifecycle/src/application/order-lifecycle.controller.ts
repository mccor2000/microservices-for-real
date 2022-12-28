import { ServerErrorResponse} from '@grpc/grpc-js';
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { ORDER_SERVICE } from 'src/domain/order.ports';

import { 
  CreateOrderRequest, 
  ConfirmOrderRequest, 
  CompleteOrderRequest, 
  CancelOrderRequest, 
  OrderLifecycleService 
} from '@microservices-for-real/common';

@Controller()
export class OrderLifecycle implements OrderLifecycleService {
  constructor(
    @Inject(ORDER_SERVICE)
    readonly service: OrderLifecycleService
  ) { }

  @GrpcMethod("OrderLifecycleService", "CreateOrder")
  async CreateOrder(data: CreateOrderRequest) {
    return this.service.CreateOrder(data)
  }

  @GrpcMethod("OrderLifecycleService", "ConfirmOrder")
  async ConfirmOrder(data: ConfirmOrderRequest) {
    return this.service.ConfirmOrder(data)
  }

  @GrpcMethod("OrderLifecycleService", "CancelOrder")
  async CompleteOrder(data: CompleteOrderRequest){
    return this.service.CompleteOrder(data)
  }

  @GrpcMethod("OrderLifecycleService", "CancelOrder")
  async CancelOrder(data: CancelOrderRequest) {
    return this.service.CancelOrder(data)
  }
}