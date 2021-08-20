import { IJwtPayLoad } from './../interfaces/jwt-payload.interface';
import { IUserLogin } from './../interfaces/user-login-interface';
import { UserService } from './../../user/services/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserLoginResponse } from '../interfaces/user-login-response';
import { compare } from 'bcrypt';

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
    }
  }
}
