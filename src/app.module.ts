import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [UserModule, ProposalModule],
})
export class AppModule {}
