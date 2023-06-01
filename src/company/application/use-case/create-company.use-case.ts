import { Company } from '../../domain/entities/Company';
import { CompanyOutput, CompanyOutputMapper } from '../dto/company-output.dto';
import CompanyRepository from '../../domain/repository/company.repository';
import UseCase from '../../../@seedwork/application/use-case';

export default class CreateTypeCompanyUseCase
  implements UseCase<Input, Output>
{
  constructor(private companyRepo: CompanyRepository.Repository) {}

  async execute(input: Input): Promise<Output> {
    const entity = new Company(input);
    await this.companyRepo.insert(entity);
    return CompanyOutputMapper.toOutput(entity);
  }
}

export type Input = {
  name: string;
  government_code: string;
  address: string;
  address_number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
};

export type Output = CompanyOutput;
