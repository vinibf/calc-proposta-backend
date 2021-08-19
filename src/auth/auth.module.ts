import { LocalStrategy } from './shared/local.strategy';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../user/user.module';
import { AuthService } from './shared/auth.service';
import { JwtStrategy } from './shared/jwt.strategy';

import { jwtConstants } from './constants/constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  controllers: AuthController,
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
