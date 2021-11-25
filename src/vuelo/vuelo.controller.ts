import { Body, Controller, Post } from '@nestjs/common';
import { VueloService } from './vuelo.service';
import { VueloTDO } from './dto/vuelo.tdo';

@Controller('api/v1/vuelo')
export class VueloController {
  constructor(private readonly vueloService: VueloService) {}
  @Post()
  create(@Body() campos: VueloTDO) {
    return this.vueloService.create(campos);
  }
}
