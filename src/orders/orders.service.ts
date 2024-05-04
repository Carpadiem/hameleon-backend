import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Orders)
        private ordersRepo: Repository<Orders>
    ) {}

    async createOrder(dto: OrderDto) {
        const order = await this.ordersRepo.create(dto)
        await this.ordersRepo.save(order)
        return {
            'status': 200
        }
    }

    async getOrdersByPhoneNumber(phone_number: string): Promise<Orders[]> {
        let order = await this.ordersRepo.findBy({ phone_number })
        order.forEach(el=>{
            el.order_from_cart = JSON.parse(el.order_from_cart)
        })
        return order
    }
}
