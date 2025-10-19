import { betterAuth, BetterAuthOptions, Auth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@db/db';
import { DBAdapter } from 'better-auth/adapters';

export const auth: Auth<{
  database: (options: BetterAuthOptions) => DBAdapter<BetterAuthOptions>;
}> = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
  },
});
