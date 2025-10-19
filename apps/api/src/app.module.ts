import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DrizzleModule } from './modules/drizzle/drizzle.module';
import { UsersModule } from './modules/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@thallesp/nestjs-better-auth';

import { auth } from './lib/auth';

@Module({
  imports: [
    AuthModule.forRoot({ auth }),
    ConfigModule.forRoot({ isGlobal: true }),
    DrizzleModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
