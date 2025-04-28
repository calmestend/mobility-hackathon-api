import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser, SelectUser } from './types';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() request: CreateUser) {
    return this.userService.createUser(request);
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  async deleteUser(@Body() request: SelectUser) {
    return this.userService.deleteUser(request);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  async updateUser(@Body() request: SelectUser) {
    return this.userService.updateUser(request.id, request);
  }
}
