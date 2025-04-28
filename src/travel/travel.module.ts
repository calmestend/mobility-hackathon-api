import { Module } from '@nestjs/common';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [DatabaseService],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
