import { OrderService } from './order.service';
import { Order } from './order.interface';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<Order[]>;
    create(order: Order): Promise<Order>;
}
