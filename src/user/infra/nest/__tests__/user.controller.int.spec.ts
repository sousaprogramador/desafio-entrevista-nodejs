import { Test, TestingModule } from '@nestjs/testing';
import {
  CreateUserUseCase,
  UpdateUserUseCase,
  ListUsersUseCase,
  GetUserUseCase,
  DeleteUserUseCase,
} from '../../../application';
import { UserRepository, User } from '../../../domain';
import { UserController } from '../user.controller';
import { UserModule } from '../user.module';
import { DatabaseModule } from '../../../../database/database.module';
import { USER_PROVIDERS } from '../user.providers';
import { UserFixture, ListUsersFixture, UpdateUserFixture } from '../fixtures';
import {
  UserCollectionPresenter,
  UserPresenter,
} from '../presenter/user.presenter';

describe('UserController Integration Tests', () => {
  let controller: UserController;
  let repository: UserRepository.Repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, UserModule],
    }).compile();

    controller = module.get(UserController);
    repository = module.get(
      USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(controller['createUseCase']).toBeInstanceOf(
      CreateUserUseCase.UseCase,
    );
    expect(controller['updateUseCase']).toBeInstanceOf(
      UpdateUserUseCase.UseCase,
    );
    expect(controller['listUseCase']).toBeInstanceOf(ListUsersUseCase.UseCase);
    expect(controller['getUseCase']).toBeInstanceOf(GetUserUseCase.UseCase);
    expect(controller['deleteUseCase']).toBeInstanceOf(
      DeleteUserUseCase.UseCase,
    );
  });

  describe('should create a user', () => {
    const arrange = UserFixture.arrangeForSave();

    test.each(arrange)(
      'when body is $send_data',
      async ({ send_data, expected }) => {
        const presenter = await controller.create(send_data);
        const entity = await repository.findById(presenter.id);

        expect(entity.toJSON()).toStrictEqual({
          id: presenter.id,
          created_at: presenter.created_at,
          password: entity.password,
          ...expected,
        });

        expect(presenter).toEqual(new UserPresenter(entity));
      },
    );
  });

  describe('should update a user', () => {
    const arrange = UpdateUserFixture.arrangeForSave();

    const user = User.fake().aUser().build();
    beforeEach(async () => {
      await repository.insert(user);
    });

    test.each(arrange)(
      'with request $send_data',
      async ({ send_data, expected }) => {
        const presenter = await controller.update(user.id, send_data);
        const entity = await repository.findById(presenter.id);
        delete entity.password;
        expect(entity.toJSON()).toMatchObject({
          id: presenter.id,
          created_at: presenter.created_at,
          ...expected,
        });
        expect(presenter).toEqual(new UserPresenter(entity));
      },
    );
  });

  it('should get a user', async () => {
    const user = User.fake().aUser().build();
    await repository.insert(user);
    const presenter = await controller.findOne(user.id);

    expect(presenter.id).toBe(user.id);
    expect(presenter.name).toBe(user.name);
    expect(presenter.email).toBe(user.email);
    expect(presenter.avatar).toBe(user.avatar);
    expect(presenter.is_active).toBe(user.is_active);
    expect(presenter.created_at).toStrictEqual(user.created_at);
  });

  describe('search method', () => {
    describe('should returns users using query empty ordered by created_at', () => {
      const { entitiesMap, arrange } =
        ListUsersFixture.arrangeIncrementedWithCreatedAt();

      beforeEach(async () => {
        await repository.bulkInsert(Object.values(entitiesMap));
      });

      test.each(arrange)(
        'when send_data is $send_data',
        async ({ send_data, expected }) => {
          const presenter = await controller.search(send_data);
          const { entities, ...paginationProps } = expected;
          expect(presenter).toEqual(
            new UserCollectionPresenter({
              items: entities,
              ...paginationProps.meta,
            }),
          );
        },
      );
    });
  });
});
