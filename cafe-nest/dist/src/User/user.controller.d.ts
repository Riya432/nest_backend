/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { userService } from './user.service';
import { User } from './user.schema';
import { userDto } from './dto/user.dto';
import { userLoginDto } from './dto/userLogin.dto';
import { userUpdateDto } from './dto/userupdate.dto';
export declare class userController {
    private userService;
    constructor(userService: userService);
    newUser(adminDto: userDto): Promise<User | object>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    signInUser(userLoginDto: userLoginDto): Promise<object>;
    updateUser(id: string, userUpdateDto: userUpdateDto): Promise<object>;
    findByName(name: string): Promise<void>;
    deleteProduct(id: string): Promise<object>;
}
