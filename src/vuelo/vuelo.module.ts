import { Module } from '@nestjs/common';
import { VueloController } from './vuelo.controller';
import { VueloService } from './vuelo.service';

@Module({
  controllers: [VueloController],
  providers: [VueloService]
})
export class VueloModule {}
