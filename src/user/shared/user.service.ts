/* eslint-disable prettier/prettier */
import { User } from './user';
import { Injectable } from '@nestjs/common';
import { Guid } from 'guid-typescript';
//import * as Yup from 'yup';

@Injectable()
export class UserService {
  // Criando um  array inMemory, no momento depois implementar o banco de dados
  users: User[] = [
    {
      name: "Helama",
      email: "helama@gmail.com",
      password: "12345678",
      publicId: Guid.create()
    }
  ];
  async getAll() {
    return this.users;
  }
  async create(user: User) {
    if (this.isValidUser(user)) {
      user.publicId = Guid.create();
      this.users.push(user);
      return user;
    } else{
      return null;
    }
  }
  async isValidUser(user: User): Promise<boolean> {
    const isValid = (
      this.isValidName(user.name) &&
      this.isValidEmail(user.email) &&
      this.isValidPassword(user.password)
    );
    return isValid;
    // const yupObject = Yup.object().shape({
    //   name: Yup.string().required().min(3),
    //   email: Yup.string().required().email(),
    //   password: Yup.string().required().min(8)
    // });
    // const isValid = await yupObject.isValid(user);
    // return isValid;
  }
  async isValidPassword(password: string): Promise<boolean> {
    const minimumSize = 8;
    const isValid = password.length > minimumSize;
    console.log(`Password ${isValid}`)
    return isValid;
  }
  async isValidName(name: string): Promise<boolean> {
    const minimumSize = 3;
    const isValid = name.length > minimumSize;
    console.log(`Name ${isValid}`)
    return isValid;
  }
  async isValidEmail(email: string): Promise<boolean> {
    const re = /\S+@\S+\.\S+/;
    const isValid = re.test(email);
    console.log(`email ${isValid}`)
    return isValid;
  }

}
