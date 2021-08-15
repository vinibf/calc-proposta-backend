import { User } from './user';
import { Injectable } from '@nestjs/common';
import { Guid } from 'guid-typescript';

@Injectable()
export class UserService {
  // Criando um  array inMemory, no momento depois implementar o banco de dados
  users: User[] = [];
  isValidPassword(password: string): boolean {
    const minimumSize = 8;
    let isValid = false;
    if (password.length > minimumSize) isValid = true;
    return isValid;
  }
  isValidName(name: string): boolean {
    const minimumSize = 3;
    let isValid = false;
    if (name.length > minimumSize) isValid = true;
    return isValid;
  }
  isValidEmail(email: string): boolean {
    if (!email.includes('@')) return false;
    if (!email.includes('.com')) return false;
    return true;
  }
  creat(user: User) {
    if (!this.isValidPassword(user.password)) return false;
    if (!this.isValidName(user.name)) return false;
    if (!this.isValidEmail(user.email)) return false;
    user.publicId = Guid.create();
    this.users.push(user);
  }
}
