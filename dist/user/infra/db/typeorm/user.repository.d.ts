import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserRepository as UserRepositoryContract, User, UserId } from '../../../domain';
export declare class UserTypeOrmRepository implements UserRepositoryContract.Repository {
    private userModel;
    sortableFields: string[];
    constructor(userModel: Repository<UserEntity>);
    search(props: UserRepositoryContract.SearchParams): Promise<any>;
    insert(entity: User): Promise<void>;
    bulkInsert(entities: User[]): Promise<void>;
    findById(id: string | UserId): Promise<User>;
    findAll(): Promise<User[]>;
    update(entity: User): Promise<void>;
    delete(id: string | UserId): Promise<void>;
    private _get;
}
