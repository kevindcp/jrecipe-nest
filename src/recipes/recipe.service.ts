import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateRecipeDto from './dto/createRecipe.dto';
import Recipe from './recipe.interface';
import UpdateRecipeDto from './dto/updateRecipe.dto';
 
@Injectable()
export default class RecipesService {
  private lastRecipeId = 2;
  private Recipes: Recipe[] = [
    {
    "id": 1,
    "user": 1,
    "title" : "test recipe",
    "ingredients" : ["adsjkadsjldsj", "weqiewpewqi"],
    "steps" : ["adsidsjsiadjiodij", "dajldjsaj"]
    }, 
    {
      "id": 2,
      "user": 2,
      "title" : "test recipe 2",
      "ingredients" : ["adsjkadsjldsj", "weqiewpewqi"],
      "steps" : ["adsidsjsiadjiodij", "dajldjsaj"]
      }
  ];
 
  getAllRecipes() {
    return this.Recipes;
  }
 
  getRecipeById(id: number) {
    const Recipe = this.Recipes.find(Recipe => Recipe.id === id);
    if (Recipe) {
      return Recipe;
    }
    throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
  }
 
  replaceRecipe(id: number, Recipe: UpdateRecipeDto) {
    const RecipeIndex = this.Recipes.findIndex(Recipe => Recipe.id === id);
    const UpdatedRecipe = {
      id,
      user: this.Recipes[RecipeIndex].user,
      ...Recipe,
    }
    if (RecipeIndex > -1) {
      this.Recipes[RecipeIndex] = UpdatedRecipe;
      return UpdatedRecipe;
    }
    throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
  }
 
  createRecipe(Recipe: CreateRecipeDto) {
    const newRecipe = {
      id: ++this.lastRecipeId,
      ...Recipe
    }
    this.Recipes.push(newRecipe);
    return newRecipe;
  }
 
  deleteRecipe(id: number) {
    const RecipeIndex = this.Recipes.findIndex(Recipe => Recipe.id === id);
    if (RecipeIndex > -1) {
      this.Recipes.splice(RecipeIndex, 1);
    } else {
      throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
    }
  }
}