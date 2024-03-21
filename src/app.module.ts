import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LearnContController } from './learn-cont/learn-cont.controller';
import {PersonService} from './learn-cont/learn-service'
import { MongooseModule } from '@nestjs/mongoose';
import feac from './learn-cont/modells/personFeacher'


@Module({  
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/persoDb'),MongooseModule.forFeature(feac)],
  controllers: [AppController, LearnContController],
  providers: [AppService,PersonService],
})
export class AppModule {}
