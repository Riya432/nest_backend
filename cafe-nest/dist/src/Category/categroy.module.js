"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("./category.schema");
const common_1 = require("@nestjs/common");
const category_controller_1 = require("./category.controller");
const category_service_1 = require("./category.service");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const admin_module_1 = require("../Admin/admin.module");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            admin_module_1.AdminModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Category', schema: category_schema_1.CategorySchema }]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('secretKey'),
                    signOptions: {
                        expiresIn: "3d",
                    },
                }),
            }),
        ],
        providers: [category_service_1.categoryService],
        controllers: [category_controller_1.categoryController],
        exports: [category_service_1.categoryService]
    })
], CategoryModule);
//# sourceMappingURL=categroy.module.js.map