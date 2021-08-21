import { CommonEntity } from 'src/shared/common.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { PowerSupplyEnum, SubmarketEnum } from '../helpers/enums.helper';
import { Charge } from './charge.entity';

@Entity({ name: 'TB_PROPOSAL' })
export class Proposal extends CommonEntity {
  @Column({ type: 'date', name: 'STARTED_DT' })
  public startDate: Date;

  @Column({ type: 'date', name: 'END_DT' })
  public endDate: Date;

  @ManyToMany(() => Charge)
  @JoinTable()
  public charges: Charge[];

  @Column({ type: 'enum', enum: PowerSupplyEnum, name: 'POWER_SUP' })
  public powerSupply: PowerSupplyEnum;

  @Column({ type: 'enum', enum: SubmarketEnum, name: 'SUBMARKET' })
  public submarket: SubmarketEnum;

  @Column({ type: 'boolean', name: 'CONTRACTED', default: false })
  public contracted: boolean;

  // @ManyToOne(() => User, user => user.proposals)
  // public user: User;

  constructor(startDate: string, endDate: string) {
    super();
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}
