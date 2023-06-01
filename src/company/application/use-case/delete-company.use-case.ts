import CompanyRepository from '../../domain/repository/company.repository';
import UseCase from '../../../@seedwork/application/use-case';

export default class DeleteTypeCompanyUseCase
  implements UseCase<Input, Output>
{
  constructor(private typeCompanyRepo: CompanyRepository.Repository) {}

  async execute(input: Input): Promise<Output> {
    const entity = await this.typeCompanyRepo.findById(input.id);
    await this.typeCompanyRepo.delete(entity.id);
  }
}

export type Input = {
  id: string;
};

export type Output = void;
