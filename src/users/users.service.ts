import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUser, SelectUser } from './types';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  async getUsers() {
    return this.databaseService.db.query.users.findMany();
  }

  async createUser(user: CreateUser) {
    await this.databaseService.db.insert(schema.users).values(user);
  }

  async deleteUser(user: SelectUser) {
    await this.databaseService.db
      .delete(schema.users)
      .where(eq(schema.users.id, user.id));
  }

  async updateUser(id: number, updates: Partial<SelectUser>) {
    await this.databaseService.db
      .update(schema.users)
      .set(updates)
      .where(eq(schema.users.id, id));
  }
}
