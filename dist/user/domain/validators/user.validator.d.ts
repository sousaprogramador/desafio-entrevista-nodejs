import { ClassValidatorFields } from '../../../common';
import { UserProperties } from '../entities/user';
export declare class UserRules {
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    is_active: boolean;
    created_at: Date;
    constructor(data: UserProperties);
}
export declare class UserValidator extends ClassValidatorFields<UserRules> {
    validate(data: UserProperties): boolean;
}
export declare class UserValidatorFactory {
    static create(): UserValidator;
}
export default UserValidatorFactory;
