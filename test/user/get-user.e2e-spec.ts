import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { instanceToPlain } from 'class-transformer';
import { AppModule } from '../../src/app.module';
import { UserController } from '../../src/user/infra/nest/user.controller';
import { applyGlobalConfig } from '../../src/global-config';
import { UserFixture } from '../../src/user/infra/nest/fixtures';
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

  describe('/user/:id (GET)', () => {
    describe('should a response error when id is invalid or not found', () => {
      const arrange = [
        {
          id: '88ff2587-ce5a-4769-a8c6-1d63d29c5f7a',
          expected: {
            message:
              'Entity Not Found using ID 88ff2587-ce5a-4769-a8c6-1d63d29c5f7a',
            statusCode: 404,
            error: 'Not Found',
          },
        },
        {
          id: 'fake id',
          expected: {
            statusCode: 422,
            message: 'Validation failed (uuid is expected)',
            error: 'Unprocessable Entity',
          },
        },
      ];

      test.each(arrange)('when id is $id', async ({ id, expected }) => {
        return request(app.getHttpServer())
          .get(`/user/${id}`)
          .expect(expected.statusCode)
          .expect(expected);
      });
    });

    it('should return a user ', async () => {
      const userRepo = app.get<UserRepository.Repository>(
        USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
      );
      const user = User.fake().aUser().build();
      await userRepo.insert(user);

      const res = await request(app.getHttpServer())
        .get(`/user/${user.id}`)
        .expect(200);
      const keyInResponse = UserFixture.keysInResponse();
      expect(Object.keys(res.body)).toStrictEqual(['data']);
      expect(Object.keys(res.body.data)).toStrictEqual(keyInResponse);

      const presenter = UserController.userToResponse(user.toJSON());
      const serialized = instanceToPlain(presenter);
      delete serialized.password;
      expect(res.body.data).toStrictEqual(serialized);
    });
  });
});
