import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { PasajeroInterface } from 'src/common/interfaces/pasajero.interface';
export class VueloTDO {
  @IsNotEmpty()
  @IsString()
  readonly piloto: string;
  @IsNotEmpty()
  @IsString()
  readonly avion: string;
  @IsNotEmpty()
  @IsString()
  readonly destino: string;
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fecha: Date;
  //readonly pasajeros: PasajeroInterface;
}
