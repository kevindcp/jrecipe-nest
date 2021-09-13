import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Transform } from 'class-transformer';
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

  @Column({ nullable: true })
  @Transform(({value}) => {
    if (value !== null) {
      return value;
    }
  })
  public category: string;
}

export default Recipe;