/* eslint-disable prettier/prettier */
import { UserService } from './../shared/user.service';
import { User } from './../shared/user';
import { Controller, Get } from '@nestjs/common';
import { create } from 'domain';

@Controller('users')
export class UsersController {
    constructor(private UserService: UserService) { }
    @Get()
    async getAll(): Promise<User[]> {
        return this.UserService.getAll();
    }
}
