import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      username: createUserDto.username,
      dispaly_name: createUserDto.dispaly_name,
      year_of_birth: createUserDto.year_of_birth
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User>{
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    })

    user.username = updateUserDto.username
    user.display_name = updateUserDto.display_name
    user.year_of_birth = updateUserDto.year_of_birth

    return user
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
