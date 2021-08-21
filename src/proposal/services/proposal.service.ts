import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guid } from 'guid-typescript';
import { Repository } from 'typeorm';
import { CreateProposalDto } from '../dtos/create-proposal.dto';
//import { UpdateProposalDto } from '../dtos/update-proposal.dto';
import { Proposal } from '../entities/proposal.entity';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
  ) {}

  getAll(): Promise<Proposal[]> {
    return this.proposalRepository.find({ order: { createdAt: 'DESC' } });
  }

  getByUserId(id: Guid): Promise<Proposal[]> {
    return this.proposalRepository.findByIds([id.toString()]);
  }

  create(dto: CreateProposalDto): Promise<Proposal> {
    let val;
    if (this.isValidTimeRange(dto.startDate, dto.endDate)) {
      val = new Proposal(dto.startDate, dto.endDate);
    }

    return this.proposalRepository.save(val);
  }

  isValidTimeRange(startDate: string, endDate: string) {
    return new Date(endDate).getTime() > new Date(startDate).getTime();
  }

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
