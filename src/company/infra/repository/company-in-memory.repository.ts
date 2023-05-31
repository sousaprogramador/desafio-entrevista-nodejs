import { InMemorySearchableRepository } from '../../../@seedwork/domain/repository/in-memory.repository';
import { SortDirection } from '../../../@seedwork/domain/repository/repository-contracts';
import { Company } from '../../domain/entities/Company';
import CompanyRepository from '../../domain/repository/company.repository';

export default class CompanyInMemoryRepository
  extends InMemorySearchableRepository<Company>
  implements CompanyRepository.Repository
{
  sortableFields: string[] = ['name', 'created_at'];

  protected async applyFilter(
    items: Company[],
    filter: CompanyRepository.Filter,
  ): Promise<Company[]> {
    if (!filter) {
      return items;
    }

    return items.filter((i) => {
      return i.props.name.includes(filter.toString());
    });
  }

  protected applySort(
    items: Company[],
    sort: string,
    sort_dir: SortDirection,
  ): Promise<Company[]> {
    return !sort
      ? super.applySort(items, 'created_at', 'desc')
      : super.applySort(items, sort, sort_dir);
  }
}
