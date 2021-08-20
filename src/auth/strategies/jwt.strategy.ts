import { IJwtPayLoad } from './../interfaces/jwt-payload.interface';
import { UserService } from './../../user/services/user.service';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstants } from '../constants/constants';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      secretOrKey: jwtConstants.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: IJwtPayLoad): Promise<User> {
    const { id, email } = payload;
    const user = await this.userService.findByIdAndEmail(email, id);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
