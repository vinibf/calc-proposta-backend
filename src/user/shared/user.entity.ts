import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  Id: string;
  @Column ()
  name: string;
  @Column
  email: string;
  @Column
  password: string;
}
