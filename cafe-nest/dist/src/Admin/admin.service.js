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
exports.adminService = void 0;
const common_1 = require("@nestjs/common");
const admin_schema_1 = require("./admin.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let adminService = class adminService {
    constructor(adminModel, jwtService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
    }
    async newAdmin(adminDto) {
        const { firstName, userName, password, email, isAdmin, } = adminDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const existingUser = await this.adminModel.findOne({
            userName,
            email,
        });
        if (!existingUser) {
            const adminUser = await this.adminModel.create({
                firstName,
                userName,
                password: hashedPassword,
                email,
                isAdmin: true,
            });
            return adminUser.save();
        }
        else {
            return {
                statusCode: 400,
                message: `User already exist.`,
            };
        }
    }
    async loginAdmin(adminLoginDto) {
        const { email, password } = adminLoginDto;
        const admin = await this.adminModel.findOne({ email });
        const isAdmin = admin.isAdmin;
        if (admin && (await bcrypt.compare(password, admin.password))) {
            const payload = { email, isAdmin };
            const accessToken = await this.jwtService.sign(payload);
            return {
                token: accessToken,
            };
        }
        else {
            throw new common_1.UnauthorizedException('User is not authorized');
        }
    }
};
exports.adminService = adminService;
exports.adminService = adminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], adminService);
//# sourceMappingURL=admin.service.js.map