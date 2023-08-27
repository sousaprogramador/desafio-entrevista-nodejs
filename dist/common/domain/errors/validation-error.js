"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchValidationError = exports.EntityValidationError = exports.BaseValidationError = void 0;
class ValidationError extends Error {
}
exports.default = ValidationError;
class BaseValidationError extends Error {
    constructor(error = {}, message = 'Validation Error') {
        super(message);
        this.error = error;
    }
    setFromError(field, error) {
        if (error) {
            this.error[field] = [error.message];
        }
    }
    count() {
        return Object.keys(this.error).length;
    }
}
exports.BaseValidationError = BaseValidationError;
class EntityValidationError extends BaseValidationError {
    constructor(error = {}) {
        super(error, 'Entity Validation Error');
        this.name = 'EntityValidationError';
    }
}
exports.EntityValidationError = EntityValidationError;
class SearchValidationError extends BaseValidationError {
    constructor(error = {}) {
        super(error, 'Search Validation Error');
        this.error = error;
        this.name = 'SearchValidationError';
    }
}
exports.SearchValidationError = SearchValidationError;
//# sourceMappingURL=validation-error.js.map