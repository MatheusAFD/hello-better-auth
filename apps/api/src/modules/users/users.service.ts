import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';

import type { DrizzleSchema } from '../../drizzle/types';
import { DrizzleAsyncProvider } from '../../drizzle/drizzle.provider';
import { users, type User, type NewUser } from '../../drizzle/schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: DrizzleSchema,
  ) {}

  async findAll(): Promise<User[]> {
    const result = await this.db.select().from(users);
    return result;
  }

  async findOne(id: number): Promise<User> {
    const [user] = await this.db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async create(
    newUser: Omit<NewUser, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<User> {
    const [user] = await this.db.insert(users).values(newUser).returning();

    return user;
  }

  async update(
    id: number,
    updateData: Partial<
      Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<User> {
    const [user] = await this.db
      .update(users)
      .set(updateData)
      .where(eq(users.id, id))
      .returning();

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async remove(id: number): Promise<void> {
    const [deleted] = await this.db
      .delete(users)
      .where(eq(users.id, id))
      .returning();

    if (!deleted) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
