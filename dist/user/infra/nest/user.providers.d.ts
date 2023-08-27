import { DataSource } from 'typeorm';
import { UserRepository } from '../../domain';
import { UserTypeOrmRepository } from '../db';
import { CreateUserUseCase, UpdateUserUseCase, ListUsersUseCase, GetUserUseCase, DeleteUserUseCase } from '../../application';
export declare namespace USER_PROVIDERS {
    namespace REPOSITORIES {
        const USER_SEQUELIZE_REPOSITORY: {
            provide: string;
            useFactory: (dataSource: DataSource) => UserTypeOrmRepository;
            inject: string[];
        };
        const USER_REPOSITORY: {
            provide: string;
            useExisting: string;
        };
    }
    namespace USE_CASES {
        const CREATE_USER_USE_CASE: {
            provide: typeof CreateUserUseCase.UseCase;
            useFactory: (userRepo: UserRepository.Repository) => CreateUserUseCase.UseCase;
            inject: string[];
        };
        const UPDATE_USER_USE_CASE: {
            provide: typeof UpdateUserUseCase.UseCase;
            useFactory: (userRepo: UserRepository.Repository) => UpdateUserUseCase.UseCase;
            inject: string[];
        };
        const LIST_USERS_USE_CASE: {
            provide: typeof ListUsersUseCase.UseCase;
            useFactory: (userRepo: UserRepository.Repository) => ListUsersUseCase.UseCase;
            inject: string[];
        };
        const GET_USER_USE_CASE: {
            provide: typeof GetUserUseCase.UseCase;
            useFactory: (userRepo: UserRepository.Repository) => GetUserUseCase.UseCase;
            inject: string[];
        };
        const DELETE_USER_USE_CASE: {
            provide: typeof DeleteUserUseCase.UseCase;
            useFactory: (userRepo: UserRepository.Repository) => DeleteUserUseCase.UseCase;
            inject: string[];
        };
    }
}
