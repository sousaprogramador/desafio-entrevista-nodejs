import CompanyInMemoryRepository from '../../../infra/repository/company-in-memory.repository';
import CreateCompanyUseCase from '../create-company.use-case';
describe('CreateCompanyUseCase', () => {
  let useCase: CreateCompanyUseCase;
  let repository: CompanyInMemoryRepository;

  beforeEach(() => {
    repository = new CompanyInMemoryRepository();
    useCase = new CreateCompanyUseCase(repository);
  });

  it('should create a type company', async () => {
    const spyInsert = jest.spyOn(repository, 'insert');
    let output = await useCase.execute({
      name: 'c',
      government_code: '1234',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: '12',
      zip_code: 'some zip_code',
    });

    expect(spyInsert).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      name: 'c',
      government_code: '1234',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: '12',
      zip_code: 'some zip_code',
      created_at: repository.items[0].created_at,
      updated_at: repository.items[0].updated_at,
    });

    output = await useCase.execute({
      name: 'c2',
      government_code: '1234',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: '12',
      zip_code: 'some 34',
    });
    expect(spyInsert).toHaveBeenCalledTimes(2);
    expect(output).toStrictEqual({
      id: repository.items[1].id,
      name: 'c2',
      government_code: '1234',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: '12',
      zip_code: 'some 34',
      created_at: repository.items[1].created_at,
      updated_at: repository.items[1].updated_at,
    });
  });
});
