import { BaseEntity } from 'src/shared/base.entity';
import { PowerSupplyEnum, SubmarketEnum } from '../helpers/enums.helper';

@Entity()
export class Proposal extends BaseEntity {
  public startDate: Date;
  public endDate: Date;
  //public load: Load[];

  @Column({
    type: "enum",
    enum: PowerSupplyEnum,
  })
  public powerSupply: PowerSupplyEnum;

  public submarket: SubmarketEnum;
  public contracted: boolean;
  public userId: string;

  constructor(
    startDate: Date,
    endDate: Date,
    //load: Load[],
    powerSupply: string,
    submarket: string,
    userId: string,
  ) {
    super();
    this.startDate = startDate;
    this.endDate = endDate;
    //carga
    this.powerSupply = powerSupply;
    this.submarket = submarket;
    this.contracted = false;
    this.userId = userId;
  }

  getTotalConsumption(): number {
    //this.loadList.reduce((ac, cur) => (ac += cur.consumption), 0);
    return 0;
  }

  //calculate valor_proposta
  getProposalValue() {
    const totalHours = ;
    
    //this.getTotalConsumption() * totalHours * (10 + this.submarket + this.powerSupply)
  }
}
