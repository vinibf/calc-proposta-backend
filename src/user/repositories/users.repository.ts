import { UserDto } from './../dto/user.dto';
import { User } from './../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UsersRespository extends Repository<User> {
  async createAndSave(userDto: UserDto): Promise<User> {
    const newUser = this.create({
      ...userDto,
    });
    await this.save(newUser);
    return newUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ email });
  }
}
