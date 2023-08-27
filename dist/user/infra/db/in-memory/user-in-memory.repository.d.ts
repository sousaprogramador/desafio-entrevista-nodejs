import { InMemorySearchableRepository } from '../../../../common/domain';
import { SortDirection } from '../../../../common/domain';
import { User, UserId, UserRepository } from '../../../domain';
export declare class UserInMemoryRepository extends InMemorySearchableRepository<User, UserId, UserRepository.Filter> implements UserRepository.Repository {
    sortableFields: string[];
    protected applyFilter(items: User[], filter: UserRepository.Filter): Promise<User[]>;
    protected applySort(items: User[], sort: string | null, sort_dir: SortDirection | null): Promise<User[]>;
}
export default UserInMemoryRepository;
