import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateRecipeDto from './dto/createRecipe.dto';
import Recipe from './recipe.entity';
import UpdateRecipeDto from './dto/updateRecipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'src/users/user.entity';
@Injectable()
export default class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>
  ) {}

  getAllRecipes() {
    const recipes = this.recipesRepository.find({relations: ['author', 'categories']})
    return recipes;
  }

  async getRecipeById(id: number) {
    const recipe = await this.recipesRepository.findOne(id);
    if (recipe) {
      return recipe;
    }
    throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
  }

  async createRecipe(recipe: CreateRecipeDto, userId: User) {
    const newRecipe = await this.recipesRepository.create({...recipe, author: userId});
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