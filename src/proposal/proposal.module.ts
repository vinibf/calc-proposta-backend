import { Module } from '@nestjs/common';
import { ProposalController } from './controllers/proposal.controller';

@Module({
  controllers: [ProposalController],
})
export class ProposalModule {}
