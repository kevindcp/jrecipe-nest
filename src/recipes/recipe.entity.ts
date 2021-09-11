import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Recipe;