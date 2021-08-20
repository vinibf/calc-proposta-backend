import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthService } from './shared/auth.service';

import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { JwtAuthGuard } from './shared/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
