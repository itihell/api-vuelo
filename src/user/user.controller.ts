import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }

  @Get()
  finAll() {
    return this.userService.finAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
