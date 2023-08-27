import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { instanceToPlain } from 'class-transformer';
import { AppModule } from '../../src/app.module';
import { UserController } from '../../src/user/infra/nest/user.controller';
import { applyGlobalConfig } from '../../src/global-config';
import { ListUsersFixture } from '../../src/user/infra/nest/fixtures';
import { UserRepository, User } from '../../src/user/domain';
import { USER_PROVIDERS } from '../../src/user/infra/nest/user.providers';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    applyGlobalConfig(app);
    await app.init();
  });

  describe('/users (GET)', () => {
    describe('should return categories sorted by created_at when request query is empty', () => {
      const { entitiesMap, arrange } =
        ListUsersFixture.arrangeIncrementedWithCreatedAt();

      beforeEach(async () => {
        const userRepo = app.get<UserRepository.Repository>(
          USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
        );
        await userRepo.bulkInsert(Object.values(entitiesMap));
      });

      test.each(arrange)(
        'when query params is $send_data',
        async ({ send_data }) => {
          const queryParams = new URLSearchParams(send_data as any).toString();
          return request(app.getHttpServer())
            .get(`/user/?${queryParams}`)
            .expect(200);
        },
      );
    });

    describe('should return categories using paginate, filter and sort', () => {
      const { entitiesMap, arrange } = ListUsersFixture.arrangeUnsorted();

      beforeEach(async () => {
        const userRepo = app.get<UserRepository.Repository>(
          USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
        );
        await userRepo.bulkInsert(Object.values(entitiesMap));
      });

      test.each([arrange[0]])(
        'when query params is $send_data',
        async ({ send_data }) => {
          const queryParams = new URLSearchParams(send_data as any).toString();
          return request(app.getHttpServer())
            .get(`/user/?${queryParams}`)
            .expect(200);
        },
      );
    });
  });
});
