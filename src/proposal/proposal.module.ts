import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalController } from './controllers/proposal.controller';
//import { Proposal } from './entities/proposal.entity';
import { ProposalService } from './services/proposal.service';
//import { LoadController } from './controllers/load.controller';
//import { Load } from './entities/load.entity';
//import { LoadService } from './services/load.service';

@Module({
  /*TypeOrmModule.forFeature([Proposal, Charge])*/
  imports: [],
  //exports: [TypeOrmModule],
  providers: [ProposalService], //, ChargeService
  controllers: [ProposalController], //, ChargeController
})
export class ProposalModule {}
