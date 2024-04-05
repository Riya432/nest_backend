/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail, MinLength, Matches } from 'class-validator';

export class adminDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  firstName: string

  // @IsString()
  // @IsNotEmpty()
  // lastName: string

  // @IsNotEmpty()
  // gender: string

  // @IsNotEmpty()
  // mobileNo: number

  isAdmin: boolean

}