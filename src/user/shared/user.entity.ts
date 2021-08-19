import { BaseEntity } from 'src/shared/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
