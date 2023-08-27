import { UserOutput, ListUsersUseCase } from '../../../application';
import { CollectionPresenter } from '../../../../common';
export declare class UserPresenter {
    id: string;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    is_active: boolean;
    created_at: Date;
    constructor(output: UserOutput);
}
export declare class UserCollectionPresenter extends CollectionPresenter {
    data: UserPresenter[];
    constructor(output: ListUsersUseCase.Output);
}
