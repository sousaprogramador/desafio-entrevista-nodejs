import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { instanceToPlain } from 'class-transformer';
import { AppModule } from '../../src/app.module';
import { UserController } from '../../src/user/infra/nest/user.controller';
import { applyGlobalConfig } from '../../src/global-config';
import { CreateUserFixture } from '../../src/user/infra/nest/fixtures';
import { UserRepository } from '../../src/user/domain';
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

  describe('should a response error with 422 when request body is invalid', () => {
    const invalidRequest = CreateUserFixture.arrangeInvalidRequest();
    const arrange = Object.keys(invalidRequest).map((key) => ({
      label: key,
      value: invalidRequest[key],
    }));
    test.each(arrange)('when body is $label', ({ value }) => {
      return request(app.getHttpServer())
        .post('/user')
        .send(value.send_data)
        .expect(422)
        .expect(value.expected);
    });
  });

  describe('should create a user', () => {
    const arrange = CreateUserFixture.arrangeForSave();
    let userRepo: UserRepository.Repository;
    beforeEach(async () => {
      userRepo = app.get<UserRepository.Repository>(
        USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
      );
    });
    test.each(arrange)(
      'when body is $send_data',
      async ({ send_data, expected }) => {
        const res = await request(app.getHttpServer())
          .post('/user')
          .send(send_data)
          .expect(201);
        const keyInResponse = CreateUserFixture.keysInResponse();
        expect(Object.keys(res.body)).toStrictEqual(['data']);
        expect(Object.keys(res.body.data)).toStrictEqual(keyInResponse);
        const id = res.body.data.id;
        const userCreated = await userRepo.findById(id);
        const presenter = UserController.userToResponse(userCreated.toJSON());
        const serialized = instanceToPlain(presenter);
        expect(res.body.data).toStrictEqual({
          id: serialized.id,
          created_at: serialized.created_at,
          ...expected,
        });
      },
    );
  });
});
