import { Controller, Get } from '@nestjs/common';

import type { UserSession } from '@thallesp/nestjs-better-auth';

import {
  Session,
  AllowAnonymous,
  OptionalAuth,
} from '@thallesp/nestjs-better-auth';

@Controller('users')
export class UsersController {
  @Get('me')
  getProfile(@Session() session: UserSession) {
    return { user: session.user };
  }

  @Get('public')
  @AllowAnonymous()
  getPublic() {
    return { message: 'Public route' };
  }

  @Get('optional')
  @OptionalAuth()
  getOptional(@Session() session: UserSession) {
    return { authenticated: !!session };
  }
}
