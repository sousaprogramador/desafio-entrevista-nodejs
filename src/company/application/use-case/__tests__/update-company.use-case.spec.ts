import CompanyInMemoryRepository from '../../../infra/repository/company-in-memory.repository';
import UpdateCompanyUseCase from '../update-company.use-case';
import NotFoundError from '../../../../@seedwork/domain/errors/not-found.error';
import { Company } from '../../../domain/entities/company';
describe('UpdateTypeCompanyUseCase', () => {
  let useCase: UpdateCompanyUseCase;
  let repository: CompanyInMemoryRepository;

  beforeEach(() => {
    repository = new CompanyInMemoryRepository();
    useCase = new UpdateCompanyUseCase(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() =>
      useCase.execute({
        id: 'fake id',
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
    ).rejects.toThrow(new NotFoundError(`Entity Not Found using ID fake id`));
  });

  it('should create a type company', async () => {
    const spyUpdate = jest.spyOn(repository, 'update');
    const entity = new Company({
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
    });
    repository.insert(entity);
    let output = await useCase.execute({
      id: entity.id,
      name: 'some updated',
      government_code: '1234',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: '12',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
    });

    expect(spyUpdate).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      name: 'some updated',
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
