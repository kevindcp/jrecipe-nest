"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const users_service_1 = require("../users/users.service");
const createUser_dto_1 = require("../users/dto/createUser.dto");
const common_1 = require("@nestjs/common");
const errorCodes_enum_1 = require("../db/errorCodes.enum");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async verifyPassword(password, hashedPassword) {
        const isPasswordMatching = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordMatching) {
            throw new common_1.HttpException('Invalid user or password', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async register(registrationData) {
        try {
            const createdUser = await this.usersService.createUser(registrationData);
            return createdUser;
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === errorCodes_enum_1.default.UniqueViolation) {
                throw new common_1.HttpException('User with that email already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAuthenticatedUser(username, password) {
        try {
            const user = await this.usersService.getUserByUsername(username);
            await this.verifyPassword(password, user.password);
            return user;
        }
        catch (error) {
            throw new common_1.HttpException('Incorrect user or password', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getTokenWithJwtToken(userId) {
        const payload = { id: userId };
        const token = await this.jwtService.signAsync(payload);
        return { token };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.default,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map