import RecipesService from './recipes.service';
import CreateRecipeDto from './dto/createRecipe.dto';
import UpdateRecipeDto from './dto/updateRecipe.dto';
import IdValidator from 'src/utils/validateId';
import RequestWithUser from 'src/auth/requestWithUser.Inteface';
export default class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    getAllRecipes(): Promise<import("./recipe.entity").default[]>;
    getRecipeById(id: string): Promise<import("./recipe.entity").default>;
    createRecipe(req: RequestWithUser, recipe: CreateRecipeDto): Promise<import("./recipe.entity").default>;
    updateRecipe({ id }: IdValidator, recipe: UpdateRecipeDto): Promise<import("./recipe.entity").default>;
    deleteRecipe({ id }: IdValidator): Promise<void>;
}
