import User from 'src/users/user.entity';
declare class Recipe {
    id?: number;
    title: string;
    ingredients: string;
    steps: string;
    categories: string;
    author: User;
}
export default Recipe;
