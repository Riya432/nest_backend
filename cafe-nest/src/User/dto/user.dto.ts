/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNotEmpty,
  minLength,
  MinLength,
  Matches,
  IsEmail,
} from 'class-validator';

export class userDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  mobileNo: number;
}
function unique(): (target: userDto, propertyKey: "email") => void {
  throw new Error('Function not implemented.');
}

