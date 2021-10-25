import { AuthService } from './auth.service';
import CreateUserDto from 'src/users/dto/createUser.dto';
import RequestWithUser from './requestWithUser.Inteface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registrationData: CreateUserDto): Promise<import("../users/user.entity").default>;
    logIn(req: RequestWithUser): Promise<{
        token: string;
    }>;
}
