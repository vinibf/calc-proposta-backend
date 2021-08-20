import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { CreateProposalDto } from '../dtos/create-proposal.dto';
import { UpdateProposalDto } from '../dtos/update-proposal.dto';
import { Proposal } from '../entities/proposal.entity';
import { ProposalService } from '../services/proposal.service';

@Controller('proposals')
export class ProposalController {
  constructor(private service: ProposalService) {}

  @Post()
  //@Redirect('url', 200)
  async create(
    @Body() createProposalDto: CreateProposalDto,
  ): Promise<Proposal> {
    return this.service.create(createProposalDto);
  }

  @Get()
  async findAll(): Promise<Proposal[]> {
    return this.service.findAll();
  }

  @Get(':public_id')
  async findOne(@Param('public_id') id: Guid): Promise<Proposal> {
    return this.service.findOne(id);
  }

  @Patch(':public_id')
  async certificate(
    @Param('public_id') id: Guid,
    @Body() updateProposalDto: UpdateProposalDto,
  ): Promise<Proposal> {
    return this.service.certificate(id, updateProposalDto);
  }

  @Delete(':public_id')
  async delete(@Param('public_id') id: Guid): Promise<Proposal> {
    return this.service.delete(id);
  }
}
