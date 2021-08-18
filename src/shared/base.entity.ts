import { Guid } from 'guid-typescript';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  private id: number;
  public publicId: string;
  public createdAt: Date;

  constructor() {
    this.publicId = Guid.create().toString();
    this.createdAt = new Date();
  }
}