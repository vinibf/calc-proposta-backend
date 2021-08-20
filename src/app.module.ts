import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProposalModule } from './proposal/proposal.module';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ProposalModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
