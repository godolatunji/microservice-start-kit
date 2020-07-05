import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './create-user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @MessagePattern({ cmd: 'find' })
  find(): Promise<UserModel[]> {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'create' })
  create(createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(createUserDto);
  }
}
