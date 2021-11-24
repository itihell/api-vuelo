import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserInterface } from '../common/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER.name) private readonly model: Model<UserInterface>,
  ) {}
  async hasPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(userDTO: UserDTO): Promise<UserInterface> {
    const hash = await this.hasPassword(userDTO.password);
    const newUser = new this.model({ ...userDTO, password: hash });
    return await newUser.save();
  }

  async finAll(): Promise<UserInterface[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<UserInterface> {
    return await this.model.findById(id);
  }
}
