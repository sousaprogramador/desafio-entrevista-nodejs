"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCase = void 0;
const user_output_1 = require("../dto/user-output");
var GetUserUseCase;
(function (GetUserUseCase) {
    class UseCase {
        constructor(userRepo) {
            this.userRepo = userRepo;
        }
        async execute(input) {
            const entity = await this.userRepo.findById(input.id);
            return user_output_1.UserOutputMapper.toOutput(entity);
        }
    }
    GetUserUseCase.UseCase = UseCase;
})(GetUserUseCase = exports.GetUserUseCase || (exports.GetUserUseCase = {}));
exports.default = GetUserUseCase;
//# sourceMappingURL=get-user.use-case.js.map