import { Module } from '@nestjs/common';
import { DateController } from './date.controller';
import { DateService } from './date.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [DatabaseService],
  controllers: [DateController],
  providers: [DateService],
})
export class DateModule {}
