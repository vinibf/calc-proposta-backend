import { Guid } from 'guid-typescript';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public publicId: string;

  @Column()
  public createdAt: Date;

  constructor() {
    this.publicId = Guid.create().toString();
    this.createdAt = new Date();
  }
}
