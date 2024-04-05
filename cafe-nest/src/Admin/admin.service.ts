/* eslint-disable prettier/prettier */
import { Injectable, Req, Res, UnauthorizedException } from '@nestjs/common';
import { Admin } from './admin.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { adminDto } from './dto/admin.dto';
import { JwtService } from '@nestjs/jwt';
import { adminLoginDto } from './dto/adminLogin.dto';
import { response } from 'express';
import { log } from 'console';

@Injectable()
export class adminService {
  constructor(
    @InjectModel(Admin.name)
    private adminModel: Model<Admin>,
    private jwtService: JwtService,
  ) {}

  async newAdmin(adminDto: adminDto): Promise<Admin | object> {
    const {
      firstName,
     // lastName,
      userName,
      password,
      email,
      // mobileNo,
      // gender,
      isAdmin,
    } = adminDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const existingUser = await this.adminModel.findOne({
      userName,
      email,
    });
    if (!existingUser) {
      //create new user with admin model
      const adminUser = await this.adminModel.create({
        firstName,
        //lastName,
        userName,
        password: hashedPassword,
        email,
        // mobileNo,
        // gender,
        isAdmin: true,
      });
      //save new admin
      return adminUser.save();
    } else {
      return {
        statusCode: 400,
        message: `User already exist.`,
      };
    }
  }

 async loginAdmin(adminLoginDto: adminLoginDto): Promise<{token: string}> {
    const { email, password } = adminLoginDto;
    const admin = await this.adminModel.findOne({ email });
    const isAdmin = admin.isAdmin;
    //check admin  username and password are same or not
    if (admin && (await bcrypt.compare(password, admin.password))) {
      //store data in payload
      const payload = { email, isAdmin };
      //using jwtService.sign generate jwttoken


      const accessToken = await this.jwtService.sign(payload);

//for store cookie 
      
//
// console.log(accessToken)
      return {
        token: accessToken,
      };


    } else {
      throw new UnauthorizedException('User is not authorized');
    }
  }




  



}
