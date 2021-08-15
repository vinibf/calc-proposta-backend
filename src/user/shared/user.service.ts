/* eslint-disable prettier/prettier */
import { User } from './user';
import { Injectable } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import * as yup from 'yup';

@Injectable()
export class UserService {
  // Criando um  array inMemory, no momento depois implementar o banco de dados
  users: User[] = [];
  // isValidPassword(password: string): boolean {
  //   const minimumSize = 8;
  //   let isValid = false;
  //   if (password.length > minimumSize) isValid = true;
  //   return isValid;
  // }
  // isValidName(name: string): boolean {
  //   const minimumSize = 3;
  //   let isValid = false;
  //   if (name.length > minimumSize) isValid = true;
  //   return isValid;
  // }
  // isValidEmail(email: string): boolean {
  //   if (!email.includes('@')) return false;
  //   if (!email.includes('.com')) return false;
  //   return true;
  // }
  creat(user: User) {
    if (this.isValidUser(user)) {
      user.publicId = Guid.create();
      this.users.push(user);
    }
  }
  async isValidUser(user: User): Promise<boolean> {
    const yupObject = yup.object().shape({
      name: yup.string().defined().min(3),
      email: yup.string().defined().email(),
      password: yup.string().defined().min(8)
    });
    return yupObject.isValid({
      name: user.name,
      email: user.email,
      password: user.password
    })
  }
}
