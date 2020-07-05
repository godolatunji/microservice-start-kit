import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  private readonly userRepositoy: Repository<UserModel>;
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {
    this.userRepositoy = entityManager.getRepository(UserModel);
  }

  async findAll(): Promise<UserModel[]> {
    return this.userRepositoy.find();
  }

  async createUser(data: CreateUserDto): Promise<UserModel> {
    const u = new UserModel();
    u.name = data.name;
    await this.userRepositoy.save(u);
    return u;
  }
}
