import { DataSource } from 'typeorm';
import { UserEntity } from '../db';
import { UserRepository } from '../../domain';
import { UserTypeOrmRepository } from '../db';
import { Cryptography } from '../bcrypt';
import {
  CreateUserUseCase,
  UpdateUserUseCase,
  ListUsersUseCase,
  GetUserUseCase,
  DeleteUserUseCase,
} from '../../application';

export namespace USER_PROVIDERS {
  export namespace REPOSITORIES {
    export const USER_SEQUELIZE_REPOSITORY = {
      provide: 'USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => {
        return new UserTypeOrmRepository(dataSource.getRepository(UserEntity));
      },
      inject: ['DATA_SOURCE'],
    };

    export const USER_REPOSITORY = {
      provide: 'USER_REPOSITORY',
      useExisting: 'USER_REPOSITORY',
    };
  }

  export namespace USE_CASES {
    export const CREATE_USER_USE_CASE = {
      provide: CreateUserUseCase.UseCase,
      useFactory: (userRepo: UserRepository.Repository) => {
        return new CreateUserUseCase.UseCase(userRepo, new Cryptography());
      },
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
    };

    export const UPDATE_USER_USE_CASE = {
      provide: UpdateUserUseCase.UseCase,
      useFactory: (userRepo: UserRepository.Repository) => {
        return new UpdateUserUseCase.UseCase(userRepo);
      },
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
    };

    export const LIST_USERS_USE_CASE = {
      provide: ListUsersUseCase.UseCase,
      useFactory: (userRepo: UserRepository.Repository) => {
        return new ListUsersUseCase.UseCase(userRepo);
      },
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
    };

    export const GET_USER_USE_CASE = {
      provide: GetUserUseCase.UseCase,
      useFactory: (userRepo: UserRepository.Repository) => {
        return new GetUserUseCase.UseCase(userRepo);
      },
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
    };

    export const DELETE_USER_USE_CASE = {
      provide: DeleteUserUseCase.UseCase,
      useFactory: (userRepo: UserRepository.Repository) => {
        return new DeleteUserUseCase.UseCase(userRepo);
      },
      inject: [REPOSITORIES.USER_REPOSITORY.provide],
    };
  }
}
