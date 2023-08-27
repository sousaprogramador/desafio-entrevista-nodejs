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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUserDto = void 0;
const class_transformer_1 = require("class-transformer");
class SearchUserDto {
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value) {
            return Object.assign(Object.assign({}, (value.name && { name: value.name })), (value.email && {
                email: value.email,
            }));
        }
        return value;
    }),
    __metadata("design:type", Object)
], SearchUserDto.prototype, "filter", void 0);
exports.SearchUserDto = SearchUserDto;
//# sourceMappingURL=search-user.dto.js.map