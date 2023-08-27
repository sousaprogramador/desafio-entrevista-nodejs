import { FieldsErrors } from '../validators';
export declare class LoadEntityError extends Error {
    error: FieldsErrors;
    constructor(error: FieldsErrors, message?: string);
}
