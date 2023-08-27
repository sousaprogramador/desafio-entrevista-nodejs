import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { applyGlobalConfig } from '../../src/global-config';
import { UserRepository, User } from '../../src/user/domain';
import { USER_PROVIDERS } from '../../src/user/infra/nest/user.providers';
import { NotFoundError } from '../../src/common';

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
          message: 'Validation failed (uuid is expected)',
          error: 'Unprocessable Entity',
          statusCode: 422,
        },
      },
    ];

    test.each(arrange)('when id is $id', async ({ id, expected }) => {
      return request(app.getHttpServer())
        .delete(`/user/${id}`)
        .expect(expected.statusCode)
        .expect(expected);
    });

    it('should delete a user response with status 204', async () => {
      const userRepo = app.get<UserRepository.Repository>(
        USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
      );
      const user = User.fake().aUser().build();
      await userRepo.insert(user);

      await request(app.getHttpServer()).delete(`/user/${user.id}`).expect(204);

      await expect(userRepo.findById(user.id)).rejects.toThrow(
        new NotFoundError(`Entity Not Found using ID ${user.id}`),
      );
    });
  });
});
