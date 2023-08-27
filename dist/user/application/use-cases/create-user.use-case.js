"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const domain_1 = require("../../domain");
const dto_1 = require("../dto");
var CreateUserUseCase;
(function (CreateUserUseCase) {
    class UseCase {
        constructor(userRepo) {
            this.userRepo = userRepo;
        }
        async execute(input) {
            const password = await (0, bcrypt_1.hash)(input.password, 8);
            const entity = new domain_1.User(Object.assign(Object.assign({}, input), { password }));
            await this.userRepo.insert(entity);
            return dto_1.UserOutputMapper.toOutput(entity);
        }
    }
    CreateUserUseCase.UseCase = UseCase;
})(CreateUserUseCase = exports.CreateUserUseCase || (exports.CreateUserUseCase = {}));
exports.default = CreateUserUseCase;
//# sourceMappingURL=create-user.use-case.js.map