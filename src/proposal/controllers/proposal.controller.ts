import {
  Body,
  Controller,
  //Delete,
  Get,
  Param,
  //Patch,
  Post,
} from '@nestjs/common';
import { Proposal } from '../entities/proposal.entity';
import { Guid } from 'guid-typescript';
import { CreateProposalDto } from '../dtos/create-proposal.dto';
// import { UpdateProposalDto } from '../dtos/update-proposal.dto';
//import { Proposal } from '../entities/proposal.entity';
import { ProposalService } from '../services/proposal.service';

@Controller('proposals')
export class ProposalController {
  constructor(private service: ProposalService) {}

  @Get()
  async getAll(): Promise<Proposal[]> {
    return this.service.getAll();
  }

  @Get(':public_id')
  async getByUserId(@Param('public_id') id: Guid): Promise<Proposal[]> {
    return this.service.getByUserId(id);
  }

  @Post()
  //@Redirect('url', 200)
  async create(@Body() dto: CreateProposalDto): Promise<Proposal> {
    return this.service.create(dto);
  }

  // @Get()
  // @UseGuards(AuthGuard('jwt'))
  // async getByIdUser(@Headers() token: string) {
  //   return this.proposalService.getByIdUser(token);
  // }

  // getByUserId
  // create
  // contract
  // delete
  // calculateValue

  // @Get(':public_id')
  // async findOne(@Param('public_id') id: Guid): Promise<Proposal> {
  //   return this.service.findOne(id);
  // }

  // @Patch(':public_id')
  // async certificate(
  //   @Param('public_id') id: Guid,
  //   @Body() updateProposalDto: UpdateProposalDto,
  // ): Promise<Proposal> {
  //   return this.service.certificate(id, updateProposalDto);
  // }

  // @Delete(':public_id')
  // async delete(@Param('public_id') id: Guid): Promise<Proposal> {
  //   return this.service.delete(id);
  // }
}
