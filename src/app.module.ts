import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { host, port, username, password, database } from './config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/entities/orders.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: host,
      port: port,
      username: username,
      password: password,
      database: database,
      entities: [User, Orders],
      synchronize: false, // set false in prod
    }),
    UsersModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}