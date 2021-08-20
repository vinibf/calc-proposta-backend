import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;
}
