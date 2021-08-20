import { BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Load extends BaseEntity {
  @Column()
  public title: string;

  @Column()
  public consumptionKwh: number;

  constructor(title: string, consumptionKwh: string) {
    super();
    this.title = title;
    this.consumptionKwh = parseFloat(consumptionKwh);
  }
}
