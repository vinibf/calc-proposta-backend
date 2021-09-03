import { Guid } from 'guid-typescript';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public publicId: string;
  public createdAt: Date;

  constructor() {
    this.publicId = Guid.create().toString();
    this.createdAt = new Date();
  }
}
