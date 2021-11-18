import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HerosModule } from './heros/heros.module';

@Module({
  imports: [HerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
