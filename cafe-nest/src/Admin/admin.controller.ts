/* eslint-disable prettier/prettier */
import { Body, Controller, Post,Get, Req, Res, UseGuards } from '@nestjs/common';
import { adminService } from './admin.service';
import { Admin } from './admin.schema';
import { adminDto } from './dto/admin.dto';
import { adminLoginDto } from './dto/adminLogin.dto';
import { Request, Response, request } from 'express';

import { TokenGuard } from './authGuard';
@Controller('admin')
export class adminController {

  constructor(
    private adminService: adminService, 
    ) {}

  @Post('/register')
  async newAdmin(@Body() adminDto: adminDto): Promise<Admin | object> {
   
    return this.adminService.newAdmin(adminDto);
    
  }

  
  @Post('/login')
  async loginAdmin(@Body()  adminLoginDto: adminLoginDto,@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<void>{
    const token =  await this.adminService.loginAdmin(adminLoginDto) ;
    console.log(token);
    
    res.cookie('access_token', token.token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
  }).send({ status: 'ok' });
 


}
@Get("/test")
@UseGuards(TokenGuard)
test(): String {
  return 'This action returns all cats';
}
 




}

function findAll(arg0: any, request: any, Request: { new(input: URL | RequestInfo, init?: RequestInit): globalThis.Request; prototype: globalThis.Request; }) {
  throw new Error('Function not implemented.');
}
