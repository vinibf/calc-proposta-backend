import { Body, Post } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { UserService } from './../shared/user.service';
import { Controller, Get, Put } from '@nestjs/common';
import { User } from '../shared/user';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
  @Post()
  async create(@Body() user: User): Promise<User>{
      return this.userService.create(user);
  }
}
