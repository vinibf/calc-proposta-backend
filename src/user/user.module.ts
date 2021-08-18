/* eslint-disable prettier/prettier */
import { UserService } from './shared/user.service';
import { UsersController } from './users/users.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService, UsersController],
})
export class UserModule {}
