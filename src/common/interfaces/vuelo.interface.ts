import { PasajeroInterface } from './pasajero.interface';

export interface VueloInterface extends Document {
  piloto: string;
  avion: string;
  destino: string;
  fecha: Date;
  pasajeros: PasajeroInterface[];
}
