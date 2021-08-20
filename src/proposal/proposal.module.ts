import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalController } from './controllers/proposal.controller';
import { Proposal } from './entities/proposal.entity';
import { ProposalService } from './services/proposal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proposal])],
  exports: [TypeOrmModule],
  providers: [ProposalService],
  controllers: [ProposalController],
})
export class ProposalModule {}
