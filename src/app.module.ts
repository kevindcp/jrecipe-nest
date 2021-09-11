import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DBModule } from './db/db.module';
@Module({
  imports: [RecipesModule, UsersModule,
    ConfigModule.forRoot({
    // validate env variable swith Joi
    validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      PORT: Joi.number(),
    })
    }),
    DBModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}