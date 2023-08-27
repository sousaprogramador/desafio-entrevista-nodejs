import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { instanceToPlain } from 'class-transformer';
import { AppModule } from '../../src/app.module';
import { UserController } from '../../src/user/infra/nest/user.controller';
import { applyGlobalConfig } from '../../src/global-config';
import { UpdateUserFixture } from '../../src/user/infra/nest/fixtures';
import { UserRepository, User } from '../../src/user/domain';
import { USER_PROVIDERS } from '../../src/user/infra/nest/user.providers';

describe('UserController (e2e)', () => {
  const uuid = '9366b7dc-2d71-4799-b91c-c64adb205104';
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    applyGlobalConfig(app);
    await app.init();
  });

  describe('/users/:id (PUT)', () => {
    describe('should a response error when id is invalid or not found', () => {
      const faker = User.fake().aUser();
      const arrange = [
        {
          id: '88ff2587-ce5a-4769-a8c6-1d63d29c5f7a',
          send_data: {
            name: faker.name,
            email: faker.email,
            password: faker.password,
            avatar: faker.avatar,
          },
          expected: {
            message:
              'Entity Not Found using ID 88ff2587-ce5a-4769-a8c6-1d63d29c5f7a',
            statusCode: 404,
            error: 'Not Found',
          },
        },
        {
          id: 'fake id',
          send_data: {
            name: faker.name,
            email: faker.email,
            password: faker.password,
            avatar: faker.avatar,
          },
          expected: {
            statusCode: 422,
            message: 'Validation failed (uuid is expected)',
            error: 'Unprocessable Entity',
          },
        },
      ];

      test.each(arrange)(
        'when id is $id',
        async ({ id, send_data, expected }) => {
          return request(app.getHttpServer())
            .put(`/user/${id}`)
            .send(send_data)
            .expect(expected.statusCode)
            .expect(expected);
        },
      );
    });

    describe('should a response error with 422 when request body is invalid', () => {
      const invalidRequest = UpdateUserFixture.arrangeInvalidRequest();
      const arrange = Object.keys(invalidRequest).map((key) => ({
        label: key,
        value: invalidRequest[key],
      }));
      test.each(arrange)('when body is $label', ({ value }) => {
        return request(app.getHttpServer())
          .put(`/user/${uuid}`)
          .send(value.send_data)
          .expect(422)
          .expect(value.expected);
      });
    });

    describe('should a response error with 422 when throw EntityValidationError', () => {
      const validationError =
        UpdateUserFixture.arrangeForEntityValidationError();
      const arrange = Object.keys(validationError).map((key) => ({
        label: key,
        value: validationError[key],
      }));
      let userRepo: UserRepository.Repository;

      beforeEach(() => {
        userRepo = app.get<UserRepository.Repository>(
          USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
        );
      });
      test.each(arrange)('when body is $label', async ({ value }) => {
        const category = User.fake().aUser().build();
        await userRepo.insert(category);
        return request(app.getHttpServer())
          .put(`/user/${category.id}`)
          .send(value.send_data)
          .expect(422)
          .expect(value.expected);
      });
    });

    describe('should update a user', () => {
      const arrange = UpdateUserFixture.arrangeForSave();
      let userRepo: UserRepository.Repository;

      beforeEach(async () => {
        userRepo = app.get<UserRepository.Repository>(
          USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
        );
      });
      test.each(arrange)(
        'when body is $send_data',
        async ({ send_data, expected }) => {
          const userCreated = User.fake().aUser().build();
          await userRepo.insert(userCreated);

          const res = await request(app.getHttpServer())
            .put(`/user/${userCreated.id}`)
            .send(send_data)
            .expect(200);
          const keyInResponse = UpdateUserFixture.keysInResponse();
          expect(Object.keys(res.body)).toStrictEqual(['data']);
          expect(Object.keys(res.body.data)).toStrictEqual(keyInResponse);
          const id = res.body.data.id;
          const userUpdated = await userRepo.findById(id);
          const presenter = UserController.userToResponse(userUpdated.toJSON());
          const serialized = instanceToPlain(presenter);
          delete serialized.password;
          expect(res.body.data).toStrictEqual(serialized);
          expect(res.body.data).toStrictEqual({
            id: serialized.id,
            created_at: serialized.created_at,
            ...expected,
          });
        },
      );
    });
  });
});
