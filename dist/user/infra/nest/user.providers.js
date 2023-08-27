"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_PROVIDERS = void 0;
const db_1 = require("../db");
const db_2 = require("../db");
const application_1 = require("../../application");
var USER_PROVIDERS;
(function (USER_PROVIDERS) {
    let REPOSITORIES;
    (function (REPOSITORIES) {
        REPOSITORIES.USER_SEQUELIZE_REPOSITORY = {
            provide: 'USER_REPOSITORY',
            useFactory: (dataSource) => {
                return new db_2.UserTypeOrmRepository(dataSource.getRepository(db_1.UserEntity));
            },
            inject: ['DATA_SOURCE'],
        };
        REPOSITORIES.USER_REPOSITORY = {
            provide: 'USER_REPOSITORY',
            useExisting: 'USER_REPOSITORY',
        };
    })(REPOSITORIES = USER_PROVIDERS.REPOSITORIES || (USER_PROVIDERS.REPOSITORIES = {}));
    let USE_CASES;
    (function (USE_CASES) {
        USE_CASES.CREATE_USER_USE_CASE = {
            provide: application_1.CreateUserUseCase.UseCase,
            useFactory: (userRepo) => {
                return new application_1.CreateUserUseCase.UseCase(userRepo);
            },
            inject: [REPOSITORIES.USER_REPOSITORY.provide],
        };
        USE_CASES.UPDATE_USER_USE_CASE = {
            provide: application_1.UpdateUserUseCase.UseCase,
            useFactory: (userRepo) => {
                return new application_1.UpdateUserUseCase.UseCase(userRepo);
            },
            inject: [REPOSITORIES.USER_REPOSITORY.provide],
        };
        USE_CASES.LIST_USERS_USE_CASE = {
            provide: application_1.ListUsersUseCase.UseCase,
            useFactory: (userRepo) => {
                return new application_1.ListUsersUseCase.UseCase(userRepo);
            },
            inject: [REPOSITORIES.USER_REPOSITORY.provide],
        };
        USE_CASES.GET_USER_USE_CASE = {
            provide: application_1.GetUserUseCase.UseCase,
            useFactory: (userRepo) => {
                return new application_1.GetUserUseCase.UseCase(userRepo);
            },
            inject: [REPOSITORIES.USER_REPOSITORY.provide],
        };
        USE_CASES.DELETE_USER_USE_CASE = {
            provide: application_1.DeleteUserUseCase.UseCase,
            useFactory: (userRepo) => {
                return new application_1.DeleteUserUseCase.UseCase(userRepo);
            },
            inject: [REPOSITORIES.USER_REPOSITORY.provide],
        };
    })(USE_CASES = USER_PROVIDERS.USE_CASES || (USER_PROVIDERS.USE_CASES = {}));
})(USER_PROVIDERS = exports.USER_PROVIDERS || (exports.USER_PROVIDERS = {}));
//# sourceMappingURL=user.providers.js.map