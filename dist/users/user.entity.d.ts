import Recipe from 'src/recipes/recipe.entity';
declare class User {
    id?: number;
    email: string;
    username: string;
    password: string;
    recipes: Recipe[];
}
export default User;
