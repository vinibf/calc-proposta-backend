import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalModule } from './proposal/proposal.module';
//import { AuthModule } from './auth/auth.module';
//import { Connection } from 'typeorm';

@Module({
  /*TypeOrmModule.forRoot(), AuthModule*/
  imports: [ProposalModule],
})
export class AppModule {
  //constructor(private connection: Connection) {}
}
