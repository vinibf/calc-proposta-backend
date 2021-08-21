import { IsDate, IsNotEmpty, MinLength } from 'class-validator';
import { Charge } from '../entities/charge.entity';
import { PowerSupplyEnum, SubmarketEnum } from '../helpers/enums.helper';

export class CreateProposalDto {
  @IsNotEmpty({ message: 'Data Inicial é obrigatória' })
  @IsDate({ message: 'Data Inicial deve ser uma data válida' })
  startDate: string;

  @IsNotEmpty({ message: 'Data Final é obrigatória' })
  @IsDate({ message: 'Data Final deve ser uma data válida' })
  endDate: string;

  @IsNotEmpty({ message: 'Data Final é obrigatória' })
  @MinLength(1)
  charges: Charge[];

  @IsNotEmpty({ message: 'Data Final é obrigatória' })
  powerSupply: PowerSupplyEnum;

  @IsNotEmpty({ message: 'Data Final é obrigatória' })
  submarket: SubmarketEnum;
}
