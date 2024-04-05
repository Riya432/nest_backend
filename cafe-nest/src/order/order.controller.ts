import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.interface';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Post()
  async create(@Body() order: Order): Promise<Order> {
    return this.orderService.create(order);
  }

 
}
