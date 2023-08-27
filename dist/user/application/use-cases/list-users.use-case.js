"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersUseCase = void 0;
const domain_1 = require("../../domain");
const dto_1 = require("../dto");
const common_1 = require("../../../common");
var ListUsersUseCase;
(function (ListUsersUseCase) {
    class UseCase {
        constructor(userRepo) {
            this.userRepo = userRepo;
        }
        async execute(input) {
            const params = domain_1.UserRepository.SearchParams.create(input);
            const searchResult = await this.userRepo.search(params);
            return this.toOutput(searchResult);
        }
        toOutput(searchResult) {
            const items = searchResult.items.map((i) => {
                return dto_1.UserOutputMapper.toOutput(i);
            });
            return common_1.PaginationOutputMapper.toOutput(items, searchResult);
        }
    }
    ListUsersUseCase.UseCase = UseCase;
})(ListUsersUseCase = exports.ListUsersUseCase || (exports.ListUsersUseCase = {}));
exports.default = ListUsersUseCase;
//# sourceMappingURL=list-users.use-case.js.map