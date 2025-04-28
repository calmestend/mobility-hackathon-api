import { Module } from '@nestjs/common';
import { CenterController } from './center.controller';
import { CenterService } from './center.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [DatabaseService],
  controllers: [CenterController],
  providers: [CenterService],
})
export class CenterModule {}
