import { BaseEntity } from 'src/shared/base.entity';
import { Entity, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { PowerSupplyEnum, SubmarketEnum } from '../helpers/enums.helper';
import { Load } from './load.entity';

@Entity()
export class Proposal extends BaseEntity {
  @Column()
  public startDate: Date;

  @Column()
  public endDate: Date;

  @ManyToMany(() => Load)
  @JoinTable()
  public loads: Load[];

  @Column({ type: 'enum', enum: PowerSupplyEnum })
  public powerSupply: PowerSupplyEnum;

  @Column({ type: 'enum', enum: SubmarketEnum })
  public submarket: SubmarketEnum;

  @Column()
  public contracted: boolean;

  // @ManyToOne(() => User, user => user.proposals)
  // public user: User;

  constructor(
    startDate: string,
    endDate: string,
    loads: { title: string; consumptionKwh: string }[],
    powerSupply: string,
    submarket: string,
  ) {
    super();
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);

    loads.forEach((val) => {
      this.loads.push(new Load(val.title, val.consumptionKwh));
    });

    this.powerSupply = PowerSupplyEnum[powerSupply]; // ?
    this.submarket = SubmarketEnum[submarket]; // ?
    this.contracted = false;
  }

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
