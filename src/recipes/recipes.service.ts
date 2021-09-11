import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateRecipeDto from './dto/createRecipe.dto';
import Recipe from './recipe.entity';
import UpdateRecipeDto from './dto/updateRecipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>
  ) {}

  intoArray(recipe: CreateRecipeDto) {
    const recipeResponse = {
      ...recipe,
      ingredients: recipe.ingredients.split('/'),
      steps: recipe.steps.split('/')
    }
    return recipeResponse;
  }

  getAllRecipes() {
    const recipes = this.recipesRepository.find()
    const recipesArray = recipes.then(recipes => recipes.map(recipe => this.intoArray(recipe))) 
    return recipesArray;
  }


  async getRecipeById(id: number) {
    const recipe = await this.recipesRepository.findOne(id);
    if (recipe) {
      return this.intoArray(recipe);
    }
    throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
  }

  async createRecipe(recipe: CreateRecipeDto) {
    const newRecipe = await this.recipesRepository.create(recipe);
    await this.recipesRepository.save(newRecipe);
    return newRecipe;
  }

  async updateRecipe(id: number, recipe: UpdateRecipeDto) {
    await this.recipesRepository.update(id, recipe);
    const updatedRecipe = await this.recipesRepository.findOne(id);
    if (updatedRecipe) {
      return updatedRecipe
    }
    throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
  }

  async deleteRecipe(id: number) {
    const deleteResponse = await this.recipesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
    }
  }
}