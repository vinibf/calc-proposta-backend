import { UserDto } from './../dto/user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { classToClass } from 'class-transformer';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() userDto: UserDto) {
    const user = await this.userService.createUser(userDto);
    return classToClass(user);
  }
}
