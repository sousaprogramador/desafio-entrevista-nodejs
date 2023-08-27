import { ValueObject } from '../value-objects';
export declare abstract class Entity<EntityId extends ValueObject = any, Props = any, JsonProps = Required<{
    id: string;
} & Props>> {
    readonly props: Props;
    readonly entityId: EntityId;
    constructor(props: Props, entityId: EntityId);
    get id(): string;
    abstract toJSON(): JsonProps;
}
export default Entity;
