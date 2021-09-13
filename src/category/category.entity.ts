import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Recipe from 'src/recipes/recipe.entity';

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @ManyToMany(() => Recipe, (recipe: Recipe) => recipe.categories)
  public recipes: Recipe[]

}

export default Category;