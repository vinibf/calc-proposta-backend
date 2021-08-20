import { User } from './../entities/user.entity';
import { UserDto } from './../dto/user.dto';
// import { UsersRespository } from './../repositories/users.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { hash, genSalt } from 'bcrypt';
import { Guid } from 'guid-typescript';

@Injectable()
export class UserService {
  // Criando um  array inMemory, no momento depois implementar o banco de dados
  users: User[] = [
    {
      name: 'Helama',
      email: 'helama@gmail.com',
      password: 'aSD12345',
      id: Guid.create().toString(),
    },
  ];
  // constructor(
  //   @InjectRepository(UsersRespository)
  //   private userRepository: UsersRespository,
  // ) {}
  async createUser(userDto: UserDto): Promise<User> {
    const { name, email, password } = userDto;
    //  const existEmail = this.userRepository.findOne({ where: { email } });
    const existEmail = this.users.find((profile) => profile.email == email);
    if (existEmail) {
      throw new BadRequestException('E-mail in use.');
    }
    // const existName = this.userRepository.findOne({ where: { name } });
    const existName = this.users.find((profile) => profile.name == name);
    if (existName) {
      throw new BadRequestException('Name in use.');
    }
    const salt = await genSalt(8);

    const hashPassword = await hash(password, salt);
    // return this.users.push({ id: Guid.create().toString(),

    const profile = {
      name: name,
      email: email,
      password: hashPassword,
      id: Guid.create().toString(),
    };
    this.users.push(profile);
    return profile;
    // return this.userRepository.createAndSave({
    //   name: name,
    //   email: email,
    //   password: hashPassword,
    // });
  }
  async findUseByEmail(email: string): Promise<User | undefined> {
    //return this.userRepository.findByEmail(email);
    return this.users.find((profile) => profile.email == email);
  }
  async findByIdAndEmail(email: string, id: string): Promise<User | undefined> {
    // return this.userRepository.findOne({ email, id });
    return this.users.find(
      (profile) => profile.email == email && profile.id == id,
    );
  }
}
