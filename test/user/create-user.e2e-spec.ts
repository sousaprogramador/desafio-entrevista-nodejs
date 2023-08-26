import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { applyGlobalConfig } from '../../src/global-config';
import { CreateUserFixture } from '../../src/user/infra/nest/fixtures';

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

  it('/users (POST)', () => {
    const invalidRequest = CreateUserFixture.arrangeInvalidRequest();
    const arrange = Object.keys(invalidRequest).map((key) => ({
      label: key,
      value: invalidRequest[key],
    }));

    console.log('arrange', arrange);
    test.each(arrange)('when body is $label', ({ value }) => {});
  });
});
