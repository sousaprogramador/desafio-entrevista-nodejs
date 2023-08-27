"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
var DeleteUserUseCase;
(function (DeleteUserUseCase) {
    class UseCase {
        constructor(userRepository) {
            this.userRepository = userRepository;
        }
        async execute(input) {
            await this.userRepository.delete(input.id);
        }
    }
    DeleteUserUseCase.UseCase = UseCase;
})(DeleteUserUseCase = exports.DeleteUserUseCase || (exports.DeleteUserUseCase = {}));
exports.default = DeleteUserUseCase;
//# sourceMappingURL=delete-user.use-case.js.map