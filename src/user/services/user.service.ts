import { User } from './../entities/user.entity';
import { UserDto } from './../dto/user.dto';
import { UsersRespository } from './../repositories/users.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash, genSalt } from 'bcrypt';

@Injectable()
export class UserService {
  // Criando um  array inMemory, no momento depois implementar o banco de dados
  // users: User[] = [
  //   {
  //     name: 'Helama',
  //     email: 'helama@gmail.com',
  //     password: '12345678',
  //     publicId: Guid.create(),
  //   },
  // ];
  constructor(
    @InjectRepository(UsersRespository)
    private userRepository: UsersRespository,
  ) {}
  async createUser(userDto: UserDto): Promise<User> {
    const { name, email, password } = userDto;
    const existEmail = this.userRepository.findOne({ where: { email } });
    if (existEmail) {
      throw new BadRequestException('E-mail in use.');
    }
    const existName = this.userRepository.findOne({ where: { name } });
    if (existName) {
      throw new BadRequestException('Name in use.');
    }
    const salt = await genSalt(8);

    const hashPassword = await hash(password, salt);

    return this.userRepository.createAndSave({
      name,
      email,
      password: hashPassword,
    });
  }
  async findUseByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findByEmail(email);
  }
  async findByIdAndEmail(email: string, id: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email, id });
  }
}
