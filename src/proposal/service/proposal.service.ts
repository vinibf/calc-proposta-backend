/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import ProposalDto from '../dto/proposal.dto';
import { Proposal } from '../entities/proposal';

@Injectable()
export class ProposalService {
  proposals: Proposal[];
  calculateValue(proposalDto: ProposalDto): number {
    throw new Error('Method not implemented.');
  }
  delete(publicId: string): void {
    throw new Error('Method not implemented.');
  }
  upadateStatus(publicId: string): Promise<Proposal | null> {
    throw new Error('Method not implemented.');
  }
  create(proposalDto: ProposalDto): Proposal | null {
    if (proposalDto.startDate > proposalDto.endDate)
      throw new Error('Invalid Dates');

    if (new Date() > proposalDto.startDate)
      throw new Error('start date is in the past');
    if (proposalDto.charges.length)
      throw new Error('select at least one charge');
    throw new Error('Method not implemented.');
  }
  getByIdUser(id: string): Promise<Proposal[]> {
    throw new Error('Method not implemented.');
  }
}
