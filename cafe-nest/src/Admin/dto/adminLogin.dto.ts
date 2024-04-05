/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from 'class-validator';

export class adminLoginDto {
  // @IsString()
  // userName: string;
 @IsEmail()
  email:string;
  @IsString()
  password: string;

}