import { AggregateRoot, UniqueEntityId } from '../../../common';
import { UserFakeBuilder } from './user-fake-builder';
export declare type UserProperties = {
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    is_active?: boolean;
    created_at?: Date;
};
export declare type UserPropsJson = Required<{
    id: string;
} & UserProperties>;
export declare class UserId extends UniqueEntityId {
}
export declare class User extends AggregateRoot<UserId, UserProperties, UserPropsJson> {
    readonly props: UserProperties;
    constructor(props: UserProperties, entityId?: UserId);
    update(data: UserProperties): void;
    static validate(props: UserProperties): void;
    activate(): void;
    deactivate(): void;
    get name(): string;
    private set name(value);
    get email(): string;
    private set email(value);
    get password(): string;
    private set password(value);
    get avatar(): string;
    private set avatar(value);
    get is_active(): boolean;
    private set is_active(value);
    get created_at(): Date;
    static fake(): typeof UserFakeBuilder;
    toJSON(): Required<{
        id: string;
    } & UserProperties>;
}
