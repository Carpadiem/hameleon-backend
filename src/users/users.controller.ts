import { Controller, Post, Body, Get, Param, Patch, } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegistrationDto } from './dto/registration.dto';
import { LoginDto } from './dto/login.dto';
import { PatchAddressDto } from './dto/patchAddress.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('/registration')
    async registration(@Body() dto: RegistrationDto) {
        return await this.usersService.registration(dto)
    }

    @Post('/login')
    async getUser(@Body() dto: LoginDto) {
        return await this.usersService.login(dto)
    }

    @Patch('/address')
    async patchAddress(@Body() dto: PatchAddressDto) {
        return await this.usersService.patchAddress(dto)
    }
}
