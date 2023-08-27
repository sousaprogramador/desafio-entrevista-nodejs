import { FieldsErrors } from '../validators/validator-fields-interface';
export default class ValidationError extends Error {
}
export declare abstract class BaseValidationError extends Error {
    error: FieldsErrors;
    constructor(error?: FieldsErrors, message?: string);
    setFromError(field: string, error: Error): void;
    count(): number;
}
export declare class EntityValidationError extends BaseValidationError {
    constructor(error?: FieldsErrors);
}
export declare class SearchValidationError extends BaseValidationError {
    error: FieldsErrors;
    constructor(error?: FieldsErrors);
}
