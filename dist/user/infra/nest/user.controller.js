"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const application_1 = require("../../application");
const user_presenter_1 = require("./presenter/user.presenter");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const search_user_dto_1 = require("./dto/search-user.dto");
let UserController = UserController_1 = class UserController {
    async search(searchParams) {
        const output = await this.listUseCase.execute(searchParams);
        return new user_presenter_1.UserCollectionPresenter(output);
    }
    async findOne(id) {
        const output = await this.getUseCase.execute({ id });
        return UserController_1.userToResponse(output);
    }
    async create(createUserDto) {
        const output = await this.createUseCase.execute(createUserDto);
        return UserController_1.userToResponse(output);
    }
    async update(id, updateUserDto) {
        const output = await this.updateUseCase.execute(Object.assign({ id }, updateUserDto));
        return UserController_1.userToResponse(output);
    }
    remove(id) {
        return this.deleteUseCase.execute({ id });
    }
    static userToResponse(output) {
        return new user_presenter_1.UserPresenter(output);
    }
};
__decorate([
    (0, common_1.Inject)(application_1.ListUsersUseCase.UseCase),
    __metadata("design:type", application_1.ListUsersUseCase.UseCase)
], UserController.prototype, "listUseCase", void 0);
__decorate([
    (0, common_1.Inject)(application_1.GetUserUseCase.UseCase),
    __metadata("design:type", application_1.GetUserUseCase.UseCase)
], UserController.prototype, "getUseCase", void 0);
__decorate([
    (0, common_1.Inject)(application_1.CreateUserUseCase.UseCase),
    __metadata("design:type", application_1.CreateUserUseCase.UseCase)
], UserController.prototype, "createUseCase", void 0);
__decorate([
    (0, common_1.Inject)(application_1.UpdateUserUseCase.UseCase),
    __metadata("design:type", application_1.UpdateUserUseCase.UseCase)
], UserController.prototype, "updateUseCase", void 0);
__decorate([
    (0, common_1.Inject)(application_1.DeleteUserUseCase.UseCase),
    __metadata("design:type", application_1.DeleteUserUseCase.UseCase)
], UserController.prototype, "deleteUseCase", void 0);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_user_dto_1.SearchUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: 422 }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: 422 }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: 422 }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = UserController_1 = __decorate([
    (0, common_1.Controller)('user')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map