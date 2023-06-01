import { CompanyOutput, CompanyOutputMapper } from '../dto/company-output.dto';
import CompanyRepository from '../../domain/repository/company.repository';
import UseCase from '../../../@seedwork/application/use-case';

export default class UpdateTypeCompanyUseCase
  implements UseCase<Input, Output>
{
  constructor(private companyRepo: CompanyRepository.Repository) {}

  async execute(input: Input): Promise<Output> {
    const entity = await this.companyRepo.findById(input.id);
    entity.update(input);
    await this.companyRepo.update(entity);
    return CompanyOutputMapper.toOutput(entity);
  }
}

export type Input = {
  id: string;
  name: string;
  government_code: string;
  address: string;
  address_number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  vacancies_cars: number;
  vacancies_motorcycle: number;
};

export type Output = CompanyOutput;
