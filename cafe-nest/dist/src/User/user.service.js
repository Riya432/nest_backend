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
exports.userService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let userService = class userService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async registerNewuser(userDto) {
        const { firstName, lastName, username, password, email, mobileNo, gender, } = userDto;
        const existingUser = await this.userModel.findOne({ username, email });
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        if (!existingUser) {
            const newUser = await this.userModel.create({
                firstName,
                lastName,
                username,
                password: hashedPassword,
                email,
                mobileNo,
                gender,
            });
            return {
                statusCode: 201,
                message: "user registered successfully",
                User: newUser
            };
        }
        else {
            return {
                statusCode: 400,
                message: 'User Already Exist',
            };
        }
    }
    async signInUser(userLoginDto) {
        const { username, password } = userLoginDto;
        const user = await this.userModel.findOne({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payLoad = { username };
            const accessToken = await this.jwtService.sign(payLoad);
            return {
                statusCode: 200,
                message: 'Login Successfull',
                User: user,
                token: accessToken,
            };
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
    async findAll() {
        const user = await this.userModel.find();
        return user;
    }
    async updateUser(id, data) {
        const updateUser = await this.userModel.findByIdAndUpdate(id, data, {
            new: true,
        });
        return {
            statusCode: 200,
            message: ' user is updated Successfully',
        };
    }
    async deleteUser(id) {
        await this.userModel.findByIdAndDelete(id);
        return {
            statusCode: 200,
            message: `User is  with id : "${id}" deleted successfully`,
        };
    }
    async search(name) {
        await this.userModel.find();
    }
};
exports.userService = userService;
exports.userService = userService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("User")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], userService);
//# sourceMappingURL=user.service.js.map