"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEntityError = void 0;
class LoadEntityError extends Error {
    constructor(error, message) {
        super(message !== null && message !== void 0 ? message : 'An entity not be loaded');
        this.error = error;
        this.name = 'LoadEntityError';
    }
}
exports.LoadEntityError = LoadEntityError;
//# sourceMappingURL=load-entity.error.js.map