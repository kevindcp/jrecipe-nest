import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
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
  @Transform(({value}) => {
    if (value !== null) {
      return value;
    }
  })
  category: string
}