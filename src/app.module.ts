import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalModule } from './proposal/proposal.module';
import { Connection } from 'typeorm';

// import ormconfig from './config/ormconfig';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProposalModule,
    // TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
