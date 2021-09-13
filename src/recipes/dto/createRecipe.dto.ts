import {IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
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

  