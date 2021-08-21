import Charge from './charge';

export class Proposal {
  publicId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  charges: Charge[];
  consumptionTotal: number;
  powerSupply: 'CONVENCIOANL' | 'RENOVAVEL';
  submerkat: 'NORTE' | 'NORDESTE' | 'SUL' | 'SUDESTE';
  status: boolean;
  value: number;
}
