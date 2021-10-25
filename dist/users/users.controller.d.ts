import UsersService from './users.service';
import UpdateUserDto from './dto/updateUser.dto';
import IdValidator from 'src/utils/validateId';
export default class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<import("./user.entity").default[]>;
    getUserById({ id }: IdValidator): Promise<import("./user.entity").default>;
    getUserRecipes({ id }: IdValidator): Promise<import("../recipes/recipe.entity").default[]>;
    updateRecipe({ id }: IdValidator, userData: UpdateUserDto): Promise<import("./user.entity").default>;
    deleteRecipe({ id }: IdValidator): Promise<void>;
}
