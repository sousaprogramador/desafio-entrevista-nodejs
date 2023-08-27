"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersFixture = exports.UpdateUserFixture = exports.CreateUserFixture = exports.UserFixture = void 0;
const entities_1 = require("../../../domain/entities");
class UserFixture {
    static keysInResponse() {
        return ['id', 'name', 'email', 'avatar', 'is_active', 'created_at'];
    }
    static arrangeForSave() {
        const faker = entities_1.User.fake()
            .aUser()
            .withName('Movie')
            .withAvatar('src')
            .build();
        return [
            {
                send_data: {
                    name: faker.name,
                    email: faker.email,
                    password: faker.password,
                    avatar: faker.avatar,
                },
                expected: {
                    name: faker.name,
                    email: faker.email,
                    avatar: faker.avatar,
                    is_active: true,
                },
            },
        ];
    }
    static arrangeInvalidRequest() {
        const faker = entities_1.User.fake().aUser();
        const defaultExpected = {
            statusCode: 422,
            error: 'Unprocessable Entity',
        };
        return {
            EMPTY: {
                send_data: {},
                expected: Object.assign({ message: [
                        'name should not be empty',
                        'name must be a string',
                        'email should not be empty',
                        'email must be a string',
                        'password should not be empty',
                        'password must be a string',
                    ] }, defaultExpected),
            },
            NAME_UNDEFINED: {
                send_data: {
                    name: faker.withInvalidNameEmpty(undefined).name,
                },
                expected: Object.assign({ message: [
                        'name should not be empty',
                        'name must be a string',
                        'email should not be empty',
                        'email must be a string',
                        'password should not be empty',
                        'password must be a string',
                    ] }, defaultExpected),
            },
            NAME_NULL: {
                send_data: {
                    name: faker.withInvalidNameEmpty(null).name,
                },
                expected: Object.assign({ message: [
                        'name should not be empty',
                        'name must be a string',
                        'email should not be empty',
                        'email must be a string',
                        'password should not be empty',
                        'password must be a string',
                    ] }, defaultExpected),
            },
            NAME_EMPTY: {
                send_data: {
                    name: faker.withInvalidNameEmpty('').name,
                },
                expected: Object.assign({ message: [
                        'name should not be empty',
                        'email should not be empty',
                        'email must be a string',
                        'password should not be empty',
                        'password must be a string',
                    ] }, defaultExpected),
            },
        };
    }
    static arrangeForEntityValidationError() {
        const faker = entities_1.User.fake().aUser();
        const defaultExpected = {
            statusCode: 422,
            error: 'Unprocessable Entity',
        };
        return {
            EMPTY: {
                send_data: {},
                expected: Object.assign({ message: [
                        'name must be a string',
                        'email must be a string',
                        'password must be a string',
                    ] }, defaultExpected),
            },
            NAME_UNDEFINED: {
                send_data: {
                    name: faker.withInvalidNameEmpty(undefined).name,
                },
                expected: Object.assign({ message: [
                        'name must be a string',
                        'email must be a string',
                        'password must be a string',
                    ] }, defaultExpected),
            },
        };
    }
}
exports.UserFixture = UserFixture;
class CreateUserFixture {
    static keysInResponse() {
        return UserFixture.keysInResponse();
    }
    static arrangeForSave() {
        return UserFixture.arrangeForSave();
    }
    static arrangeInvalidRequest() {
        return UserFixture.arrangeInvalidRequest();
    }
    static arrangeForEntityValidationError() {
        return UserFixture.arrangeForEntityValidationError();
    }
}
exports.CreateUserFixture = CreateUserFixture;
class UpdateUserFixture {
    static keysInResponse() {
        return UserFixture.keysInResponse();
    }
    static arrangeForSave() {
        return UserFixture.arrangeForSave();
    }
    static arrangeInvalidRequest() {
        return UserFixture.arrangeInvalidRequest();
    }
    static arrangeForEntityValidationError() {
        return UserFixture.arrangeForEntityValidationError();
    }
}
exports.UpdateUserFixture = UpdateUserFixture;
class ListUsersFixture {
    static arrangeIncrementedWithCreatedAt() {
        const _entities = entities_1.User.fake()
            .theUsers(4)
            .withName((i) => i + '')
            .withCreatedAt((i) => new Date(new Date().getTime() + i * 2000))
            .build();
        const entitiesMap = {
            first: _entities[0],
            second: _entities[1],
            third: _entities[2],
            fourth: _entities[3],
        };
        const arrange = [
            {
                send_data: {},
                expected: {
                    entities: [
                        entitiesMap.fourth,
                        entitiesMap.third,
                        entitiesMap.second,
                        entitiesMap.first,
                    ],
                    meta: {
                        current_page: 1,
                        last_page: 1,
                        per_page: 15,
                        total: 4,
                    },
                },
            },
            {
                send_data: {
                    page: 1,
                    per_page: 2,
                },
                expected: {
                    entities: [entitiesMap.fourth, entitiesMap.third],
                    meta: {
                        current_page: 1,
                        last_page: 2,
                        per_page: 2,
                        total: 4,
                    },
                },
            },
            {
                send_data: {
                    page: 2,
                    per_page: 2,
                },
                expected: {
                    entities: [entitiesMap.second, entitiesMap.first],
                    meta: {
                        current_page: 2,
                        last_page: 2,
                        per_page: 2,
                        total: 4,
                    },
                },
            },
        ];
        return { arrange, entitiesMap };
    }
    static arrangeUnsorted() {
        const faker = entities_1.User.fake().aUser();
        const entitiesMap = {
            a: faker.withName('a').build(),
            AAA: faker.withName('AAA').build(),
            AaA: faker.withName('AaA').build(),
            b: faker.withName('b').build(),
            c: faker.withName('c').build(),
        };
        const arrange = [
            {
                send_data: {
                    page: 1,
                    per_page: 2,
                    sort: 'name',
                    filter: {
                        name: 'AAA',
                        email: null,
                    },
                },
                expected: {
                    entities: [entitiesMap.AAA, entitiesMap.AaA],
                    meta: { current_page: 1, per_page: 2, last_page: 3, total: 5 },
                },
            },
            {
                send_data: {
                    page: 2,
                    per_page: 2,
                    sort: 'name',
                    filter: {
                        name: 'a',
                        email: null,
                    },
                },
                expected: {
                    entities: [entitiesMap.a],
                    meta: {
                        total: 3,
                        current_page: 2,
                        last_page: 2,
                        per_page: 2,
                    },
                },
            },
        ];
        return { arrange, entitiesMap };
    }
}
exports.ListUsersFixture = ListUsersFixture;
//# sourceMappingURL=index.js.map