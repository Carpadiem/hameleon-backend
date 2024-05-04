import { Controller, Post, Body, Get, Param, Patch, } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/order.dto';
import { Orders } from './entities/orders.entity';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post('/create')
    async createOrder(@Body() dto: OrderDto) {
        return await this.ordersService.createOrder(dto)
    }

    @Get('/:phone_number')
    async getOrdersByPhoneNumber(@Param('phone_number') phone_number: string): Promise<Orders[]> {
        return await this.ordersService.getOrdersByPhoneNumber(phone_number)
    }
}
