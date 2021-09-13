import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
export default class UpdateRecipeDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  ingredients: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  steps: string;

  @IsString()
  @IsOptional()
  category: string
}