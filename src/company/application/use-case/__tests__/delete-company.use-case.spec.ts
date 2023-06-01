import CompanyInMemoryRepository from '../../../infra/repository/company-in-memory.repository';
import DeleteCompanyUseCase from '../delete-company.use-case';
import NotFoundError from '../../../../@seedwork/domain/errors/not-found.error';
import { Company } from '../../../domain/entities/company';
describe('DeleteCompanyUseCase', () => {
  let useCase: DeleteCompanyUseCase;
  let repository: CompanyInMemoryRepository;

  beforeEach(() => {
    repository = new CompanyInMemoryRepository();
    useCase = new DeleteCompanyUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() => useCase.execute({ id: 'fake id' })).rejects.toThrow(
      new NotFoundError(`Entity Not Found using ID fake id`),
    );
  });

  it('should delete a type company', async () => {
    const items = [
      new Company({
        name: 'c',
        government_code: '1234',
        address: 'some address',
        address_number: ' some address_number',
        neighborhood: 'some neighborhood',
        city: 'some city',
        state: '12',
        zip_code: 'some zip_code',
        vacancies_cars: 0,
        vacancies_motorcycle: 0,
      }),
    ];
    repository.items = items;
    await useCase.execute({ id: items[0].id });
    expect(repository.items).toHaveLength(0);
  });
});
