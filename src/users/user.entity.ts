import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Recipe from 'src/recipes/recipe.entity';
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column({ unique: true })
  public email: string;
 
  @Column()
  public username: string;
 
  @Column()
  @Exclude()
  public password: string;

  @OneToMany(() => Recipe, (recipe: Recipe) => recipe.author )
  public recipes: Recipe[]
}
 
export default User;