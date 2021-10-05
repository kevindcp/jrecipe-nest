import { Body, Controller, Delete, Get, Param, Patch, Post, SerializeOptions, UseGuards } from '@nestjs/common';
import UsersService from './users.service';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';
import IdValidator from 'src/utils/validateId';
import JwtAuthGuard from 'src/auth/jwtauth.guard';
@Controller('users')
@SerializeOptions({
  strategy: 'exposeAll'
})
export default class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {} 
  
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
  
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUserById(@Param() {id}: IdValidator) {
    return this.usersService.getUserById(Number(id));
  }

  @Get(':id/recipes')
  getUserRecipes(@Param() {id}: IdValidator) {
    return this.usersService.getUserRecipes(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateRecipe(@Param() {id}: IdValidator, @Body() userData: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), userData);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteRecipe(@Param() {id}: IdValidator) {
    return this.usersService.deleteUser(Number(id));
  }
}