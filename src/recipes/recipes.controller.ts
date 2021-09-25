import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import RecipesService from './recipes.service';
import CreateRecipeDto from './dto/createRecipe.dto';
import UpdateRecipeDto from './dto/updateRecipe.dto';
import IdValidator from 'src/utils/validateId';
import JwtAuthGuard from 'src/auth/jwtauth.guard';
import RequestWithUser from 'src/auth/requestWithUser.Inteface';
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
    return this.recipesService.getRecipeById(Number(id))
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createRecipe(@Req() req: RequestWithUser,  @Body() recipe: CreateRecipeDto) {
    const {user} = req;
    return this.recipesService.createRecipe(recipe, user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateRecipe(@Param() {id}: IdValidator, @Body() recipe: UpdateRecipeDto) {
    return this.recipesService.updateRecipe(Number(id), recipe);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteRecipe(@Param() {id}: IdValidator) {
    return this.recipesService.deleteRecipe(Number(id));
  }
}