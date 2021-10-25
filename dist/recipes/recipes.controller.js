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
const recipes_service_1 = require("./recipes.service");
const createRecipe_dto_1 = require("./dto/createRecipe.dto");
const updateRecipe_dto_1 = require("./dto/updateRecipe.dto");
const validateId_1 = require("../utils/validateId");
const jwtauth_guard_1 = require("../auth/jwtauth.guard");
const requestWithUser_Inteface_1 = require("../auth/requestWithUser.Inteface");
let RecipesController = class RecipesController {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    getAllRecipes() {
        return this.recipesService.getAllRecipes();
    }
    getRecipeById(id) {
        return this.recipesService.getRecipeById(Number(id));
    }
    async createRecipe(req, recipe) {
        const { user } = req;
        return this.recipesService.createRecipe(recipe, user);
    }
    async updateRecipe({ id }, recipe) {
        return this.recipesService.updateRecipe(Number(id), recipe);
    }
    async deleteRecipe({ id }) {
        return this.recipesService.deleteRecipe(Number(id));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "getAllRecipes", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "getRecipeById", null);
__decorate([
    common_1.UseGuards(jwtauth_guard_1.default),
    common_1.Post(),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createRecipe_dto_1.default]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "createRecipe", null);
__decorate([
    common_1.UseGuards(jwtauth_guard_1.default),
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validateId_1.default, updateRecipe_dto_1.default]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "updateRecipe", null);
__decorate([
    common_1.UseGuards(jwtauth_guard_1.default),
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validateId_1.default]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "deleteRecipe", null);
RecipesController = __decorate([
    common_1.Controller('recipes'),
    __metadata("design:paramtypes", [recipes_service_1.default])
], RecipesController);
exports.default = RecipesController;
//# sourceMappingURL=recipes.controller.js.map