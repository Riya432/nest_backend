"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./product.schema");
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const config_1 = require("@nestjs/config");
const admin_module_1 = require("../Admin/admin.module");
const categroy_module_1 = require("../Category/categroy.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            admin_module_1.AdminModule,
            passport_1.PassportModule,
            categroy_module_1.CategoryModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_schema_1.ProductSchema }]),
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
        providers: [product_service_1.productService,],
        controllers: [product_controller_1.productController],
        exports: [product_service_1.productService],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map