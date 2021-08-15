import { Guid } from 'guid-typescript';

export class User {
  name: string;
  email: string;
  password: string;
  publicId: Guid;
}
