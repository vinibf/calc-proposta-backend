import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChargeController } from './controllers/charge.controller';
import { ProposalController } from './controllers/proposal.controller';
import { Charge } from './entities/charge.entity';
import { Proposal } from './entities/proposal.entity';
import { ChargeService } from './services/charge.service';
import { ProposalService } from './services/proposal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proposal, Charge])],
  exports: [TypeOrmModule],
  providers: [ProposalService, ChargeService],
  controllers: [ProposalController, ChargeController],
})
export class ProposalModule {}
