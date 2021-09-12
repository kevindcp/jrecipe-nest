import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import UsersService from './users.service';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';
import IdValidator from 'src/utils/validateId';

@Controller('users')
export default class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() {id}: IdValidator) {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  async createRecipe(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Patch(':id')
  async updateRecipe(@Param() {id}: IdValidator, @Body() userData: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), userData);
  }

  @Delete(':id')
  async deleteRecipe(@Param() {id}: IdValidator) {
    return this.usersService.deleteUser(Number(id));
  }
}