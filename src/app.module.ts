import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PasajeroModule } from './pasajero/pasajero.module';
import { VueloModule } from './vuelo/vuelo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    }),
    UserModule,
    PasajeroModule,
    VueloModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
