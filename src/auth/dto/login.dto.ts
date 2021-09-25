import { IsString, IsNotEmpty, MinLength } from 'class-validator';
export default class LoginDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}