import { users } from '@db/schema';

type UserType = typeof users.$inferSelect;

export class User implements UserType {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
