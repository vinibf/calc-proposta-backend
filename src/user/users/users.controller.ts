/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Header } from '@nestjs/common';
import { UserService } from './../shared/user.service';
import { User } from '../shared/user';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) { }
  // função Criada para teste, apagar ao fim do projeto
  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
  // @Get(":acess_token/verify")
  // async isValidToken(@Header() token:any): Promise<boolean>{
  //   return this.userService.isValidToken(token);
  // }
  @Post()
  async create(@Body() user: User): Promise<boolean> {
    return this.userService.create(user);
  }
  @Post("/login")
  async login(@Body() user: User): Promise<any> {
    return this.userService.login(user);
  }
}
