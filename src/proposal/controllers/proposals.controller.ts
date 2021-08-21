import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ProposalService } from './../service/proposal.service';
import ProposalDto from '../dto/proposal.dto';
import { Proposal } from '../entities/proposal';

@Controller('proposals')
export class ProposalsController {
  constructor(private proposalService: ProposalService) {}
  @Get()
  async getByIdUser(id: string): Promise<Proposal[]> {
    return this.proposalService.getByIdUser(id);
  }
  @Post()
  async create(@Body() proposalDto: ProposalDto): Promise<Proposal> {
    return this.proposalService.create(proposalDto);
  }
  @Patch(':publicId')
  async upadateStatus(@Param('publicId') publicId: string): Promise<Proposal> {
    return this.proposalService.upadateStatus(publicId);
  }
  @Delete(':piblicId')
  async delete(@Param('publicId') publicId: string): Promise<void> {
    this.proposalService.delete(publicId);
  }
  @Get('value')
  async calculateValue(proposalDto: ProposalDto): Promise<number> {
    return this.proposalService.calculateValue(proposalDto);
  }
}
