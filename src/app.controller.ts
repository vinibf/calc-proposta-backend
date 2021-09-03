import { UserService } from './user/services/user.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}
  @Get()
  @UseGuards(AuthGuard('jwt'))
  getHello() {
    return this.userService.getAll();
  }
}
