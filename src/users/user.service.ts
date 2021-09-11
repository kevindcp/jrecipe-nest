import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateUserDto from './dto/createUser.dto';
import User from './user.interface';
import UpdateUserDto from './dto/updateUser.dto';
 
@Injectable()
export default class UsersService {
  private lastUserId = 1;
  private Users: User[] = [{
    "id" : 1,
    "username" : "test",
    "email" : "dajdsjkld@djkajds.com",
    "passwordHash" : "adsidsjsiadjiodij"
  }];
 
  getAllUsers() {
    return this.Users;
  }
 
  getUserById(id: number) {
    const User = this.Users.find(User => User.id === id);
    if (User) {
      return User;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
 
  replaceUser(id: number, User: UpdateUserDto) {
    const UserIndex = this.Users.findIndex(User => User.id === id);
    if (UserIndex > -1) {
      this.Users[UserIndex] = User;
      return User;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
 
  createUser(User: CreateUserDto) {
    const newUser = {
      id: ++this.lastUserId,
      ...User
    }
    this.Users.push(newUser);
    return newUser;
  }
 
  deleteUser(id: number) {
    const UserIndex = this.Users.findIndex(User => User.id === id);
    if (UserIndex > -1) {
      this.Users.splice(UserIndex, 1);
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}