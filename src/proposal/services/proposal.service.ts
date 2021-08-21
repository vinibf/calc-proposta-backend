import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Guid } from 'guid-typescript';
//import { Repository } from 'typeorm';
//import { CreateProposalDto } from '../dtos/create-proposal.dto';
//import { UpdateProposalDto } from '../dtos/update-proposal.dto';
import { Proposal } from '../entities/proposal.entity';

@Injectable()
export class ProposalService {
  // constructor(
  //   @InjectRepository(Proposal)
  //   private proposalRepository: Repository<Proposal>,
  // ) {}
  getAll(): Promise<Proposal[]> {
    return this.proposalRepository.find({ order: { createdAt: 'DESC' } });
  }
  // create(dto: CreateProposalDto): Promise<Proposal> {
  //   //const entity = new Proposal(dto);
  //   //return this.proposalRepository.save(entity);
  //   return;
  // }
  // findOne(id: Guid): Promise<Proposal> {
  //   return this.proposalRepository.findOne(id.toString());
  // }
  // async certificate(id: Guid, dto: UpdateProposalDto): Promise<Proposal> {
  //   return;
  // }
  // async delete(id: Guid): Promise<Proposal> {
  //   const proposal = await this.findOne(id);
  //   return;
  //   //return this.proposalRepository.delete(proposal);
  // }
  // getTotalConsumption(): number {
  //   return this.loads.reduce((ac, cur) => (ac += cur.consumptionKwh), 0);
  // }

  // getTotalHrsOfContract(): number {
  //   const milliSeconds = this.endDate.getTime() - this.startDate.getTime();
  //   return milliSeconds / 1000 / 3600;
  // }

  // getProposalValue(): number {
  //   return this.getTotalConsumption() * this.getTotalHrsOfContract() * (10);
  // }
}
