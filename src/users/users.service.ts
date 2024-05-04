import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegistrationDto } from './dto/registration.dto';
import { LoginDto } from './dto/login.dto';
import { PatchAddressDto } from './dto/patchAddress.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>
    ) {}

    async registration(dto: RegistrationDto) {

        const phone_number = dto.phone_number
        const find_user = await this.usersRepo.findOneBy({ phone_number })
        if (!find_user) {
            const user = await this.usersRepo.create({ ...dto, delivery_address: '' })
            await this.usersRepo.save(user)
            return { status: 'ok' }
        }
        return { status: 'userAlreadyExists' }
    }

    async login(dto: LoginDto) {
        const phone_number = dto.phone_number
        const find_user = await this.usersRepo.findOneBy({ phone_number })
        
        if (find_user) {
            if (find_user.password === dto.password) {
                return { status: 'ok', user: find_user }
            }
            else {
                return { status: 'wrongPassword' }
            }
        }
        else {
            return { status: 'userNotFound' }
        }
    }

    async patchAddress(dto: PatchAddressDto) {
        const phone_number = dto.phone_number
        const find_user = await this.usersRepo.findOneBy({ phone_number })

        if (find_user) {
            await this.usersRepo.update({phone_number: phone_number}, { delivery_address: dto.address })
            return { status: 'ok' }
        }
        else {
            return { status: 'userNotFound' }
        }
    }
}
