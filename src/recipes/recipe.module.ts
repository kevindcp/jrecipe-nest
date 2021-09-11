import { Module } from '@nestjs/common';
import RecipesController from './recipe.controller';
import RecipesService from './recipe.service';
 
@Module({
  imports: [],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}