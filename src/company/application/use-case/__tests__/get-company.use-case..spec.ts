import CompanyInMemoryRepository from '../../../infra/repository/company-in-memory.repository';
import GetCompanyUseCase from '../get-company.use-case';
import NotFoundError from '../../../../@seedwork/domain/errors/not-found.error';
import { Company } from '../../../domain/entities/Company';
describe('GetCompanyUseCase', () => {
  let useCase: GetCompanyUseCase;
  let repository: CompanyInMemoryRepository;

  beforeEach(() => {
    repository = new CompanyInMemoryRepository();
    useCase = new GetCompanyUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() => useCase.execute({ id: 'fake id' })).rejects.toThrow(
      new NotFoundError(`Entity Not Found using ID fake id`),
    );
  });

  it('should returns a category', async () => {
    const items = [
      new Company({
        name: 'some name',
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
    const spyFindById = jest.spyOn(repository, 'findById');
    const output = await useCase.execute({ id: items[0].id });
    expect(spyFindById).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
      id: items[0].id,
      name: 'some name',
      government_code: '1234',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: '12',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
      created_at: repository.items[0].created_at,
      updated_at: repository.items[0].updated_at,
    });
  });
});
