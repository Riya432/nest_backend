import { adminService } from './admin.service';
import { Admin } from './admin.schema';
import { adminDto } from './dto/admin.dto';
import { adminLoginDto } from './dto/adminLogin.dto';
import { Request, Response } from 'express';
export declare class adminController {
    private adminService;
    constructor(adminService: adminService);
    newAdmin(adminDto: adminDto): Promise<Admin | object>;
    loginAdmin(adminLoginDto: adminLoginDto, req: Request, res: Response): Promise<void>;
    test(): String;
}
