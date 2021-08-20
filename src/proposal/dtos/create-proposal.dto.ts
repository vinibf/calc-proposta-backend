import { Load } from '../entities/load.entity';
import { PowerSupplyEnum, SubmarketEnum } from '../helpers/enums.helper';

export class CreateProposalDto {
  startDate: Date;
  endDate: Date;
  loads: Load[];
  powerSupply: PowerSupplyEnum;
  submarket: SubmarketEnum;
}
