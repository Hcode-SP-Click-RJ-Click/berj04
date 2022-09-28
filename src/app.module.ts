import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [PlacesModule], // Conecta o restante dos módulos do aplicativo
  controllers: [AppController], // Define quais controllers serão disponibilizadas nesse módulo específico
  providers: [AppService], // Define quais dependências serão injetadas
})
export class AppModule {}
