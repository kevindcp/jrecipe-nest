import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import RecipesService from './recipes.service';
import CreateRecipeDto from './dto/createRecipe.dto';
import UpdateRecipeDto from './dto/updateRecipe.dto';
import IdValidator from 'src/utils/validateId';

@Controller('recipes')
export default class RecipesController {
  constructor(
    private readonly recipesService: RecipesService
  ) {}

  @Get()
  getAllRecipes() {
    return this.recipesService.getAllRecipes();
  }

  @Get(':id')
  getRecipeById(@Param('id') id: string) {
    return this.recipesService.getRecipeById(Number(id));
  }

  @Post()
  async createRecipe(@Body() recipe: CreateRecipeDto) {
    return this.recipesService.createRecipe(recipe);
  }

  @Patch(':id')
  async updateRecipe(@Param() {id}: IdValidator, @Body() recipe: UpdateRecipeDto) {
    return this.recipesService.updateRecipe(Number(id), recipe);
  }

  @Delete(':id')
  async deleteRecipe(@Param() {id}: IdValidator) {
    return this.recipesService.deleteRecipe(Number(id));
  }
}