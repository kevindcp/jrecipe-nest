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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
    async getAllUsers() {
        const users = await this.usersRepository.find();
        return users;
    }
    async getUserById(id) {
        const user = await this.usersRepository.findOne(id);
        if (user) {
            return user;
        }
        throw new common_1.HttpException('User with this id does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    async getUserByUsername(username) {
        const user = await this.usersRepository.findOne({ username });
        if (user) {
            return user;
        }
        throw new common_1.HttpException('User with this email does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    async createUser(userData) {
        userData.password = await this.hashPassword(userData.password);
        const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.save(newUser);
        return newUser;
    }
    async updateUser(id, userData) {
        await this.usersRepository.update(id, userData);
        const updatedUser = await this.usersRepository.findOne(id);
        if (updatedUser) {
            return updatedUser;
        }
        throw new common_1.HttpException('User does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    async deleteUser(id) {
        const deleteResponse = await this.usersRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUserRecipes(id) {
        const user = await this.usersRepository.findOne(id, { relations: ['recipes'] });
        if (user) {
            return user.recipes;
        }
        throw new common_1.HttpException('User with this id does not exist', common_1.HttpStatus.NOT_FOUND);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.default = UsersService;
//# sourceMappingURL=users.service.js.map