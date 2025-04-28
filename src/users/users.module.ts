import { Module } from '@nestjs/common';
import { UsersController } from './UsersController';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
