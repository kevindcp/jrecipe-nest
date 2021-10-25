import UsersService from "../users/users.service";
import CreateUserDto from "src/users/dto/createUser.dto";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    private verifyPassword;
    register(registrationData: CreateUserDto): Promise<import("../users/user.entity").default>;
    getAuthenticatedUser(username: string, password: string): Promise<import("../users/user.entity").default>;
    getTokenWithJwtToken(userId: number): Promise<{
        token: string;
    }>;
}
