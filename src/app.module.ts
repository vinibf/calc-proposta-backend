import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [UserModule, ProposalModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
