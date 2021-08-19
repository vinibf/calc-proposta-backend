import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthService } from './shared/auth.service';

import { Controller, Post, UseGuards, Request } from '@nestjs/common';

@Controller()
export class AuthController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
