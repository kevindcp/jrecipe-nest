import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Category from 'src/category/category.entity';
import User from 'src/users/user.entity';
@Entity()
class Recipe {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title: string;

  @Column()
  public ingredients: string;

  @Column()
  public steps: string;

  @ManyToMany(() => Category, (category: Category) => category.recipes)
  @JoinTable()
  public categories: string;

  @ManyToOne(() => User, (author: User) => author.recipes)
  public author: User

}

export default Recipe;