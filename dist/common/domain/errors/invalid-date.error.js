"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDateError = void 0;
class InvalidDateError extends Error {
    constructor(message) {
        super(message || 'Date must be a valid Date');
        this.name = 'InvalidDateError';
    }
}
exports.InvalidDateError = InvalidDateError;
exports.default = InvalidDateError;
//# sourceMappingURL=invalid-date.error.js.map