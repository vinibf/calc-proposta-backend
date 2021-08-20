import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProposalModule } from './proposal/proposal.module';
// import ormconfig from './config/ormconfig';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProposalModule,
    // TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
