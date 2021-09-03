import { UserDto } from './../dto/user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { classToClass } from 'class-transformer';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
  @Post()
  async create(@Body() userDto: UserDto) {
    const user = await this.userService.createUser(userDto);
    return classToClass(user);
  }
}
