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
exports.userController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
const userLogin_dto_1 = require("./dto/userLogin.dto");
const authGuard_1 = require("../Admin/authGuard");
const userupdate_dto_1 = require("./dto/userupdate.dto");
let userController = class userController {
    constructor(userService) {
        this.userService = userService;
    }
    async newUser(adminDto) {
        return this.userService.registerNewuser(adminDto);
    }
    findAll() {
        return this.userService.findAll();
    }
    async signInUser(userLoginDto) {
        return this.userService.signInUser(userLoginDto);
    }
    updateUser(id, userUpdateDto) {
        return this.userService.updateUser(id, userUpdateDto);
    }
    findByName(name) {
        return this.userService.search(name);
    }
    deleteProduct(id) {
        return this.userService.deleteUser(id);
    }
};
exports.userController = userController;
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "newUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], userController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userLogin_dto_1.userLoginDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "signInUser", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, userupdate_dto_1.userUpdateDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], userController.prototype, "findByName", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], userController.prototype, "deleteProduct", null);
exports.userController = userController = __decorate([
    (0, common_1.Controller)('user'),
    (0, common_1.UseGuards)(authGuard_1.TokenGuard),
    __metadata("design:paramtypes", [user_service_1.userService])
], userController);
//# sourceMappingURL=user.controller.js.map