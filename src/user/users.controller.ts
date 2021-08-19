import { Body, Controller, Post, Get } from '@nestjs/common';
import { User } from './shared/user';
import { UserService } from './shared/user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  // função Criada para teste, apagar ao fim do projeto
  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }
  // @Post("/login")
  // async login(@Body() user: User): Promise<any> {
  //   return this.userService.login(user);
  // }
}
