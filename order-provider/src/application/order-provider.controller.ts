import { OrderProviderService } from '@microservices-for-real/common';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class OrderProvider implements OrderProviderService {
  @GrpcMethod('OrderProviderService', 'GetOrderById')
  async GetOrderById(request: { orderId: string }) {
    return { order: undefined }
  }

  @GrpcMethod('OrderProviderService', 'GetOrderById')
  async GetManyOrders(request: any) {
    return {
      totalPage: 1,
      totalItems: 20,
      orders: []
    }
  }
}
