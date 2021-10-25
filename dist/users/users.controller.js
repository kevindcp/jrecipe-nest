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
const users_service_1 = require("./users.service");
const updateUser_dto_1 = require("./dto/updateUser.dto");
const validateId_1 = require("../utils/validateId");
const jwtauth_guard_1 = require("../auth/jwtauth.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    getUserById({ id }) {
        return this.usersService.getUserById(Number(id));
    }
    getUserRecipes({ id }) {
        return this.usersService.getUserRecipes(Number(id));
    }
    async updateRecipe({ id }, userData) {
        return this.usersService.updateUser(Number(id), userData);
    }
    async deleteRecipe({ id }) {
        return this.usersService.deleteUser(Number(id));
    }
};
__decorate([
    common_1.UseGuards(jwtauth_guard_1.default),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    common_1.UseGuards(jwtauth_guard_1.default),
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validateId_1.default]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    common_1.Get(':id/recipes'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validateId_1.default]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserRecipes", null);
__decorate([
    common_1.UseGuards(jwtauth_guard_1.default),
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validateId_1.default, updateUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateRecipe", null);
__decorate([
    common_1.UseGuards(jwtauth_guard_1.default),
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validateId_1.default]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteRecipe", null);
UsersController = __decorate([
    common_1.Controller('users'),
    common_1.SerializeOptions({
        strategy: 'exposeAll'
    }),
    __metadata("design:paramtypes", [users_service_1.default])
], UsersController);
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map