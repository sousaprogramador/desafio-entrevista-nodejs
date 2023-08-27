"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsError = void 0;
class UserAlreadyExistsError extends Error {
    constructor(invalidType) {
        super(`User already exists: ${invalidType}`);
        this.name = 'UserExistsError';
    }
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
//# sourceMappingURL=user-already-exists.error.js.map