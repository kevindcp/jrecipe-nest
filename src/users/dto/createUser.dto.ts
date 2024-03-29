import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
export default class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}