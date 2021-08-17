/* eslint-disable prettier/prettier */
import { User } from './user';
import { Injectable } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import * as Yup from 'yup';

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
  login(user: User): any {
    const profile = this.users.find(email => user.email === email.email);
    if(profile == undefined) return false;
    const isValidLogin = (profile.password === user.password);
    if (isValidLogin) {
      // gerar token
      return {
        name: profile.name,
        email: profile.email,
        publicId: profile.publicId
      };
    } else{
      return false;
    }
  }
  async getAll() {
    return this.users;
  }
  async create(user: User): Promise<any> {
    const isValid = await this.isValidUser(user);

    if (isValid) {
      user.publicId = Guid.create();
      this.users.push(user);
      console.log("Usuário válido")
      // gerar token
      return {
        name: user.name,
        email: user.email,
        publicId: user.publicId
      };
    } else {
      console.log("Usuário não é válido")
      return false;
    }
  }
  async isValidUser(user: User): Promise<boolean> {
    const existEmail = (this.users.find(email => email.email == user.email) != undefined);
    const existName = (this.users.find(name => name.name == user.name) != undefined);
    if (existEmail || existName) return false;
    const minimumSizePassword = 8;
    const minimumSizeName = 3;
    const yupObject = Yup.object().shape({
      name: Yup.string().required().min(minimumSizeName),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(minimumSizePassword)
    });
    return await yupObject.isValid(user);
  }
}
