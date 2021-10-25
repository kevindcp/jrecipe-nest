"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesModule = void 0;
const common_1 = require("@nestjs/common");
const recipes_controller_1 = require("./recipes.controller");
const recipes_service_1 = require("./recipes.service");
const recipe_entity_1 = require("./recipe.entity");
const typeorm_1 = require("@nestjs/typeorm");
let RecipesModule = class RecipesModule {
};
RecipesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([recipe_entity_1.default])],
        controllers: [recipes_controller_1.default],
        providers: [recipes_service_1.default],
    })
], RecipesModule);
exports.RecipesModule = RecipesModule;
//# sourceMappingURL=recipes.module.js.map