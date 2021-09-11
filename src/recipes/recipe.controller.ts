import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import RecipesService from './recipe.service';
import CreateRecipeDto from './dto/createRecipe.dto';
import UpdateRecipeDto from './dto/updateRecipe.dto';
 
@Controller('Recipes')
export default class RecipesController {
  constructor(
    private readonly RecipesService: RecipesService
  ) {}
 
  @Get()
  getAllRecipes() {
    return this.RecipesService.getAllRecipes();
  }
 
  @Get(':id')
  getRecipeById(@Param('id') id: string) {
    return this.RecipesService.getRecipeById(Number(id));
  }
 
  @Post()
  async createRecipe(@Body() Recipe: CreateRecipeDto) {
    return this.RecipesService.createRecipe(Recipe);
  }
 
  @Put(':id')
  async replaceRecipe(@Param('id') id: string, @Body() Recipe: UpdateRecipeDto) {
    return this.RecipesService.replaceRecipe(Number(id), Recipe);
  }
 
  @Delete(':id')
  async deleteRecipe(@Param('id') id: string) {
    this.RecipesService.deleteRecipe(Number(id));
  }
}