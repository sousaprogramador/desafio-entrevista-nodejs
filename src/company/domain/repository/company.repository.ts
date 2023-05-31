import {
  SearchableRepositoryInterface,
  SearchParams as DefaultSearchParams,
  SearchResult as DefaultSearchResult,
} from '../../../@seedwork/domain/repository/repository-contracts';
import { Company } from '../entities/Company';

export namespace CompanyRepository {
  export type Filter = string;

  export class SearchParams extends DefaultSearchParams<Filter> {}
  export class SearchResult extends DefaultSearchResult<Company, Filter> {}

  export interface Repository
    extends SearchableRepositoryInterface<
      Company,
      Filter,
      SearchParams,
      SearchResult
    > {}
}

export default CompanyRepository;
