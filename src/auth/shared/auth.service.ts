import { UserService } from './../../user/shared/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(userEmail: string, userPassword: string) {
    return this.userService.validateLogin(userEmail, userPassword);
  }
  async login(user: any) {
    const payload = { name: user.name, sub: user.publicId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
