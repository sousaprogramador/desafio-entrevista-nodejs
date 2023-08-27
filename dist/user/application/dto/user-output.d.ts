import { User } from '../../domain/entities';
export declare type UserOutput = {
    id: string;
    name: string;
    email: string;
    avatar?: string | null;
    is_active?: boolean;
    created_at?: Date;
};
export declare class UserOutputMapper {
    static toOutput(entity: User): UserOutput;
}
