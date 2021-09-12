import {IsString, IsNotEmpty } from 'class-validator';
export default class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  ingredients: string
  @IsString()
  @IsNotEmpty()
  steps: string
}

  