import UsersService from "../users/users.service";
import CreateUserDto from "src/users/dto/createUser.dto";
import { HttpStatus, HttpException, Injectable } from "@nestjs/common";
import PostgresErrorCode from "src/db/errorCodes.enum";
import * as bcrypt from 'bcrypt'
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import TokenPayload from "./tokenPayload.Interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}
   
    private async verifyPassword(password: string, hashedPassword: string){
      const isPasswordMatching = await bcrypt.compare(password, hashedPassword)
      if (!isPasswordMatching) {
          throw new HttpException('Invalid user or password', HttpStatus.BAD_REQUEST);
      }
    }
    // register
    public async register(registrationData: CreateUserDto) {
      console.log(registrationData)
      try {
        const createdUser = await this.usersService.createUser(registrationData);
        console.log(createdUser)
        return createdUser;
      } catch (error) {
        if (error?.code === PostgresErrorCode.UniqueViolation) {
          throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
        }
        console.log(error)
        throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    
    public async getAuthenticatedUser(username: string, password: string) {
      try {
        const user = await this.usersService.getUserByUsername(username);
        await this.verifyPassword(password, user.password);
        return user;
      } catch (error) {
        throw new HttpException('Incorrect user or password', HttpStatus.BAD_REQUEST);
      }
    }

    public getTokenWithJwtToken(userId: number) {
      const payload: TokenPayload = { id: userId};
      const token = this.jwtService.sign(payload);
      return {token};
    }
  }