import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';

@Module({
  imports: [],
  controllers: [PlacesController],
  providers: [PlacesService, PrismaService],
})
export class PlacesModule {}
