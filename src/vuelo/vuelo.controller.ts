import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VueloService } from './vuelo.service';
import { VueloTDO } from './dto/vuelo.tdo';
import { PasajeroService } from 'src/pasajero/pasajero.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@ApiTags('vuelos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/vuelo')
export class VueloController {
  constructor(
    private readonly vueloService: VueloService,
    private readonly pasajeroService: PasajeroService,
  ) {}

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

  @Put(':vueloId/pasajero/:pasajeroId')
  async addPasajero(
    @Param('vueloId') vueloId: string,
    @Param('pasajeroId') pasajeroId: string,
  ) {
    const pasajero = await this.pasajeroService.findOne(pasajeroId);
    if (!pasajero) {
      throw new HttpException('Pasajero no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.vueloService.createPasajero(vueloId, pasajeroId);
  }
}
