/* eslint-disable prettier/prettier */
import { UserService } from './shared/user.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
