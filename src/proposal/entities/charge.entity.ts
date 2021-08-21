import { CommonEntity } from 'src/shared/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'TB_CHARGE' })
export class Charge extends CommonEntity {
  @Column({ type: 'varchar', name: 'TITLE' })
  public title: string;

  @Column({ type: 'decimal', name: 'CONSUMPTION' })
  public consumptionKwh: number;

  constructor(title: string, consumptionKwh: string) {
    super();
    this.title = title;
    this.consumptionKwh = parseFloat(consumptionKwh);
  }
}
