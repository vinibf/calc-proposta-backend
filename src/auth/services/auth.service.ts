import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { compare } from 'bcrypt';

import { IJwtPayLoad } from './../interfaces/jwt-payload.interface';
import { IUserLogin } from './../interfaces/user-login-interface';
import { UserService } from './../../user/services/user.service';
import { IUserLoginResponse } from '../interfaces/user-login-response';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login({ email, password }: IUserLogin): Promise<IUserLoginResponse> {
    const existUser = await this.userService.findUseByEmail(email);
    if (!existUser) {
      throw new UnauthorizedException('Invalid email');
    }
    if (await compare(password, existUser.password)) {
      const payload: IJwtPayLoad = {
        email: existUser.email,
        id: existUser.id,
      };
      const token: string = this.jwtService.sign(payload);

      return {
        user: payload,
        token,
      };
    } else {
      throw new UnauthorizedException('Invalid Password');
    }
  }
  async getUserIdByToken(token: string): Promise<string> {
    const payload = await this.jwtService.verify(token);

    console.log(payload);

    return 'payload';
  }
}
