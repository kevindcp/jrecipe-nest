import CreateRecipeDto from './dto/createRecipe.dto';
import Recipe from './recipe.entity';
import UpdateRecipeDto from './dto/updateRecipe.dto';
import { Repository } from 'typeorm';
import User from 'src/users/user.entity';
export default class RecipesService {
    private recipesRepository;
    constructor(recipesRepository: Repository<Recipe>);
    getAllRecipes(): Promise<Recipe[]>;
    getRecipeById(id: number): Promise<Recipe>;
    createRecipe(recipe: CreateRecipeDto, userId: User): Promise<Recipe>;
    updateRecipe(id: number, recipe: UpdateRecipeDto): Promise<Recipe>;
    deleteRecipe(id: number): Promise<void>;
}
