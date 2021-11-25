import { Module } from '@nestjs/common';
import { VueloController } from './vuelo.controller';
import { VueloService } from './vuelo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VUELO } from 'src/common/models/models';
import { VueloSchema } from './schema/vuelo.schema';
import { PasajeroModule } from 'src/pasajero/pasajero.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: VUELO.name,
        useFactory: () => VueloSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    PasajeroModule,
  ],
  controllers: [VueloController],
  providers: [VueloService],
})
export class VueloModule {}
