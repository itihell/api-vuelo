import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { create } from 'domain';
import { PasajeroDTO } from './dto/pasajero.dto';
import { PasajeroService } from './pasajero.service';

@Controller('api/v1/pasajero')
export class PasajeroController {
  constructor(private readonly pasajeroService: PasajeroService) {}
  @Post()
  create(@Body() campos: PasajeroDTO) {
    return this.pasajeroService.create(campos);
  }

  @Get()
  findAll() {
    return this.pasajeroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pasajeroService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() campos: PasajeroDTO) {
    return this.pasajeroService.update(id, campos);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pasajeroService.delete(id);
  }
}
