import UseCase from '../../../@seedwork/application/use-case';
import CompanyRepository from '../../domain/repository/company.repository';
import { CompanyOutput, CompanyOutputMapper } from '../dto/company-output.dto';

export default class GetCompanyUseCase implements UseCase<Input, Output> {
  constructor(private companyRepo: CompanyRepository.Repository) {}

  async execute(input: Input): Promise<Output> {
    const entity = await this.companyRepo.findById(input.id);
    return CompanyOutputMapper.toOutput(entity);
  }
}

export type Input = {
  id: string;
};

export type Output = CompanyOutput;
