import Recipe from 'src/recipes/recipe.entity';
declare class Category {
    id?: number;
    name: string;
    recipes: Recipe[];
}
export default Category;
