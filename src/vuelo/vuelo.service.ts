import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VueloInterface } from 'src/common/interfaces/vuelo.interface';
import { VUELO } from 'src/common/models/models';
import { VueloTDO } from './dto/vuelo.tdo';

@Injectable()
export class VueloService {
  constructor(
    @InjectModel(VUELO.name) private readonly model: Model<VueloInterface>,
  ) {}
  async create(campos: VueloTDO): Promise<VueloInterface> {
    const newVuelo = new this.model(campos);
    return await newVuelo.save();
  }
}
