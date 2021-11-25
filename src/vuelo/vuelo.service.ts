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

  async findAll(): Promise<VueloInterface[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<VueloInterface> {
    return await this.model.findById(id);
  }

  async update(id: string, campos: VueloTDO): Promise<VueloInterface> {
    return await this.model.findByIdAndUpdate(id, campos, { new: true });
  }
  async delete(id: string): Promise<VueloInterface> {
    const oldVuelo = this.model.findById(id);
    await this.model.findByIdAndDelete(id);
    return await oldVuelo;
  }
  async createPasajero(
    vueloId: string,
    pasajeroId: string,
  ): Promise<VueloInterface> {
    return await this.model
      .findByIdAndUpdate(
        vueloId,
        { $addToSet: { pasajeros: pasajeroId } },
        { new: true },
      )
      .populate('pasajeros');
  }
}
