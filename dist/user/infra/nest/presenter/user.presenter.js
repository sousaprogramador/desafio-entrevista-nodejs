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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCollectionPresenter = exports.UserPresenter = void 0;
const class_transformer_1 = require("class-transformer");
const common_1 = require("../../../../common");
class UserPresenter {
    constructor(output) {
        this.id = output.id;
        this.name = output.name;
        this.email = output.email;
        this.avatar = output.avatar;
        this.is_active = output.is_active;
        this.created_at = output.created_at;
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => {
        return value.toISOString().slice(0, 19) + '.000Z';
    }),
    __metadata("design:type", Date)
], UserPresenter.prototype, "created_at", void 0);
exports.UserPresenter = UserPresenter;
class UserCollectionPresenter extends common_1.CollectionPresenter {
    constructor(output) {
        const { items } = output, paginationProps = __rest(output, ["items"]);
        super(paginationProps);
        this.data = items.map((item) => new UserPresenter(item));
    }
}
exports.UserCollectionPresenter = UserCollectionPresenter;
//# sourceMappingURL=user.presenter.js.map