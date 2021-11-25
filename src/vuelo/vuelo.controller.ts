import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VueloService } from './vuelo.service';
import { VueloTDO } from './dto/vuelo.tdo';

@Controller('api/v1/vuelo')
export class VueloController {
  constructor(private readonly vueloService: VueloService) {}
  @Post()
  create(@Body() campos: VueloTDO) {
    return this.vueloService.create(campos);
  }

  @Get()
  findAll() {
    return this.vueloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vueloService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() campos: VueloTDO) {
    return this.vueloService.update(id, campos);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vueloService.delete(id);
  }
}
