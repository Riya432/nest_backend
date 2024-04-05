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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_dto_1 = require("./dto/admin.dto");
const adminLogin_dto_1 = require("./dto/adminLogin.dto");
const express_1 = require("express");
const authGuard_1 = require("./authGuard");
let adminController = class adminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async newAdmin(adminDto) {
        return this.adminService.newAdmin(adminDto);
    }
    async loginAdmin(adminLoginDto, req, res) {
        const token = await this.adminService.loginAdmin(adminLoginDto);
        console.log(token);
        res.cookie('access_token', token.token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
        }).send({ status: 'ok' });
    }
    test() {
        return 'This action returns all cats';
    }
};
exports.adminController = adminController;
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.adminDto]),
    __metadata("design:returntype", Promise)
], adminController.prototype, "newAdmin", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminLogin_dto_1.adminLoginDto, typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], adminController.prototype, "loginAdmin", null);
__decorate([
    (0, common_1.Get)("/test"),
    (0, common_1.UseGuards)(authGuard_1.TokenGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], adminController.prototype, "test", null);
exports.adminController = adminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.adminService])
], adminController);
function findAll(arg0, request, Request) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=admin.controller.js.map