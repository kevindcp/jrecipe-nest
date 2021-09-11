import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { RecipesModule } from './recipes/recipe.module';
@Module({
  imports: [RecipesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}