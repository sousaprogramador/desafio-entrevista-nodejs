import { SearchableRepositoryInterface, SearchProps, SearchParams as DefaultSearchParams, SearchResult as DefaultSearchResult } from '../../../common';
import { User, UserId } from '../entities';
export declare namespace UserRepository {
    type Filter = {
        name?: string;
        email?: string;
    };
    class SearchParams extends DefaultSearchParams<Filter> {
        get filter(): Filter | null;
        private constructor();
        static create(props?: Omit<SearchProps<Filter>, 'filter'> & {
            filter?: {
                name?: string;
                email?: string;
            };
        }): SearchParams;
        protected set filter(value: Filter | null);
    }
    class SearchResult extends DefaultSearchResult<User, Filter> {
    }
    type Repository = SearchableRepositoryInterface<User, UserId, Filter, SearchParams, SearchResult>;
}
export default UserRepository;
