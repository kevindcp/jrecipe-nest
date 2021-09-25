import { Body, Req, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import CreateUserDto from 'src/users/dto/createUser.dto';
import RequestWithUser from './requestWithUser.Inteface';
import { LocalAuthGuard } from './localAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}
 
  @Post('register')
  async register(@Body() registrationData: CreateUserDto) {
    return this.authService.register(registrationData);
  }
 
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async logIn(@Req() req: RequestWithUser) {
    const {user} = req;
    const token = this.authService.getTokenWithJwtToken(user.id);
    return token
  }

}