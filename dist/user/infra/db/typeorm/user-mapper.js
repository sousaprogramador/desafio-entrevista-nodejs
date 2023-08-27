"use strict";
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
exports.UserModelMapper = void 0;
const domain_1 = require("../../../domain");
const common_1 = require("../../../../common");
const common_2 = require("../../../../common");
class UserModelMapper {
    static toEntity(model) {
        const { id } = model, otherData = __rest(model, ["id"]);
        try {
            return new domain_1.User(otherData, new common_2.UniqueEntityId(id));
        }
        catch (e) {
            if (e instanceof common_1.EntityValidationError) {
                throw new common_1.LoadEntityError(e.error);
            }
            throw e;
        }
    }
}
exports.UserModelMapper = UserModelMapper;
//# sourceMappingURL=user-mapper.js.map