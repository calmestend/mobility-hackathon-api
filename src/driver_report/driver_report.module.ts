import { Module } from '@nestjs/common';
import { DriverReportController } from './driver_report.controller';
import { DriverReportService } from './driver_report.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [DatabaseService],
  controllers: [DriverReportController],
  providers: [DriverReportService],
})
export class DriverReportModule {}
