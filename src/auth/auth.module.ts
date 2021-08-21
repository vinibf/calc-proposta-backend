import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../user/user.module';

import { AuthController } from './controllers/auth.controller';
import { jwtConstants } from './constants/constants';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    forwardRef(() => UserModule),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
