/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post ,Get, Delete, UseGuards, Patch, Query} from '@nestjs/common';
import { userService } from './user.service';
import { User } from './user.schema';
import { userDto } from './dto/user.dto';
import { userLoginDto } from './dto/userLogin.dto';
import { TokenGuard } from 'src/Admin/authGuard';
//import { userUpdateDto } from './dto/userupdate.dto';
import { userUpdateDto } from './dto/userupdate.dto';

@Controller('user')
@UseGuards(TokenGuard)
export class userController {
  constructor(private userService: userService) {
  }
  
  @Post('/register')
  async newUser(@Body() adminDto: userDto): Promise<User | object> {
    return this.userService.registerNewuser(adminDto);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post('/login')
  async signInUser(@Body() userLoginDto: userLoginDto): Promise<object>{
   return this.userService.signInUser(userLoginDto);
  }
  // @Patch('/:id')
  // async updateUser(@Body() userupdateDto:userUpdateDto): Promise<object>{
  //   return this.userService.updateUser(userUpdateDto);
  // }

  
  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() userUpdateDto: userUpdateDto,
  ): Promise<object> {
    return this.userService.updateUser(id, userUpdateDto);
  }

  @Get('search')
  findByName(@Query('name') name: string) {
    return this.userService.search(name);
  }
  @Delete('/:id')
  deleteProduct(@Param('id') id: string): Promise<object> {
    return this.userService.deleteUser(id);
  }
}
