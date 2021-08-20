import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { IUserLogin } from '../interfaces/user-login-interface';
import { IUserLoginResponse } from '../interfaces/user-login-response';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() userLogin: IUserLogin): Promise<IUserLoginResponse> {
    return this.authService.login(userLogin);
  }
}
