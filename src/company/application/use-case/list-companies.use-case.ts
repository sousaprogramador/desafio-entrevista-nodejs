import UseCase from '../../../@seedwork/application/use-case';
import CompanyRepository from '../../domain/repository/company.repository';
import { CompanyOutput, CompanyOutputMapper } from '../dto/company-output.dto';
import { SearchInputDto } from '../../../@seedwork/application/dto/search-input';
import {
  PaginationOutputMapper,
  PaginationOutputDto,
} from '../../../@seedwork/application/dto/pagination-output';

export default class ListTypeCompaniesUseCase
  implements UseCase<Input, Output>
{
  constructor(private companyRepo: CompanyRepository.Repository) {}

  async execute(input: Input): Promise<Output> {
    const params = new CompanyRepository.SearchParams(input);
    const searchResult = await this.companyRepo.search(params);
    return this.toOutput(searchResult);
  }

  private toOutput(searchResult: CompanyRepository.SearchResult): Output {
    return {
      items: searchResult.items.map((i) => CompanyOutputMapper.toOutput(i)),
      ...PaginationOutputMapper.toOutput(searchResult),
    };
  }
}

export type Input = SearchInputDto;

export type Output = PaginationOutputDto<CompanyOutput>;
