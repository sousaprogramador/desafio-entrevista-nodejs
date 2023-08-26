import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { USER_PROVIDERS } from './user.providers';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    ...Object.values(USER_PROVIDERS.USE_CASES),
    USER_PROVIDERS.REPOSITORIES.USER_SEQUELIZE_REPOSITORY,
  ],
})
export class UserModule {}
