import Charge from '../entities/charge';

export default class ProposalDto {
  userId: string;
  startDate: Date;
  endDate: Date;
  charges: Charge[];
  consumptionTotal: number;
  powerSupply: 'CONVENCIOANL' | 'RENOVAVEL';
  submerkat: 'NORTE' | 'NORDESTE' | 'SUL' | 'SUDESTE';
}
