import { Guid } from 'guid-typescript';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class CommonEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  public id: number;

  @PrimaryColumn({ type: 'uuid', name: 'PUBLIC_ID' })
  public publicId: string;

  @Column({ type: 'date', name: 'CREATED_DT' })
  public createdAt: Date;

  constructor() {
    this.publicId = Guid.create().toString();
    this.createdAt = new Date();
  }
}
