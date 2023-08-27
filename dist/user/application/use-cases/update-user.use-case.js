"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const dto_1 = require("../dto");
var UpdateUserUseCase;
(function (UpdateUserUseCase) {
    class UseCase {
        constructor(userRepo) {
            this.userRepo = userRepo;
        }
        async execute(input) {
            const entity = await this.userRepo.findById(input.id);
            entity.update(input);
            await this.userRepo.update(entity);
            return dto_1.UserOutputMapper.toOutput(entity);
        }
    }
    UpdateUserUseCase.UseCase = UseCase;
})(UpdateUserUseCase = exports.UpdateUserUseCase || (exports.UpdateUserUseCase = {}));
exports.default = UpdateUserUseCase;
//# sourceMappingURL=update-user.use-case.js.map