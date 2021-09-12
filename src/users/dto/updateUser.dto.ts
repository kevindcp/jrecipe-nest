import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
export default class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    username: string 
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @IsOptional()
    password: string
}