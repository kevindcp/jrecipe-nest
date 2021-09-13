import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export default class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  
  async hashPassword(password: string){
    return bcrypt.hash(password, 10)
  }

  async getAllUsers() {
    const users = await this.usersRepository.find()
    return users
  }

  async getUserById(id: number) {
    const user = await this.usersRepository.findOne(id, {relations: ['recipes']} );
    if (user) {
      return user;
    }
    throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
  }

  /* async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  } */
 
  async createUser(userData: CreateUserDto) {
    // Validate email is not duplicate
    const email = userData.email
    const user = await this.usersRepository.findOne({ email });
    if (user){
      throw new HttpException('User with this email already exist', HttpStatus.NOT_ACCEPTABLE);
    }
    userData.password = await this.hashPassword(userData.password)
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async updateUser(id: number,  userData: UpdateUserDto){
    await this.usersRepository.update(id, userData)
    const updatedUser = await this.usersRepository.findOne(id)
    if (updatedUser) {
      return updatedUser
    }
    throw new HttpException('User does not exist', HttpStatus.NOT_FOUND)
  }

  async deleteUser(id: number) {
    const deleteResponse = await this.usersRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}