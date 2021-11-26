import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { PasajeroDTO } from './dto/pasajero.dto';
import { PasajeroService } from './pasajero.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@ApiTags('pasajeros')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
