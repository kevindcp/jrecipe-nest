import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import usersService from './user.service';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';
 
@Controller('users')
export default class usersController {
  constructor(
    private readonly usersService: usersService
  ) {}
 
  @Get()
  getAllusers() {
    return this.usersService.getAllUsers();
  }
 
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }
 
  @Post()
  async createUser(@Body() User: CreateUserDto) {
    return this.usersService.createUser(User);
  }
 
  @Put(':id')
  async replaceUser(@Param('id') id: string, @Body() User: UpdateUserDto) {
    return this.usersService.replaceUser(Number(id), User);
  }
 
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    this.usersService.deleteUser(Number(id));
  }
}