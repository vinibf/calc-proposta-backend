import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Redirect
} from '@nestjs/common';
import { CreateProposalDto } from '../dtos/create-proposal.dto';
import { UpdateProposalDto } from '../dtos/update-proposal.dto';

@Controller('proposals')
export class ProposalController {
  @Post()
  //@Redirect('url', 200)
  async create(@Body() createProposalDto: CreateProposalDto) {
    return 'created';
  }

  @Get()
  async findAll(): Promise<Proposal[]> {
    return [];
  }

  @Patch(':public_id')
  update(
    @Param('public_id') id: string,
    @Body() updateProposalDto: UpdateProposalDto
  ) {
    console.log(id);
    return 'updated';
  }

  @Delete(':public_id')
  delete(@Param('public_id') id: string) {
    console.log(id);
    return 'deleted';
  }
}
