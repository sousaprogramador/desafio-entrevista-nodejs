import CompanyInMemoryRepository from '../../../infra/repository/company-in-memory.repository';
import ListCompaniesUseCase from '../list-companies.use-case';
import { Company } from '../../../domain/entities/company';
import CompanyRepository from '../../../domain/repository/company.repository';
describe('ListTypeCompaniesUseCase', () => {
  let useCase: ListCompaniesUseCase;
  let repository: CompanyInMemoryRepository;

  beforeEach(() => {
    repository = new CompanyInMemoryRepository();
    useCase = new ListCompaniesUseCase(repository);
  });

  test('toOutput method', () => {
    let result = new CompanyRepository.SearchResult({
      items: [],
      total: 1,
      current_page: 1,
      per_page: 2,
      sort: null,
      sort_dir: null,
      filter: null,
    });
    let output = useCase['toOutput'](result);
    expect(output).toStrictEqual({
      items: [],
      total: 1,
      current_page: 1,
      per_page: 2,
      last_page: 1,
    });

    const entity = new Company({
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
    });
    result = new CompanyRepository.SearchResult({
      items: [entity],
      total: 1,
      current_page: 1,
      per_page: 2,
      sort: null,
      sort_dir: null,
      filter: null,
    });

    output = useCase['toOutput'](result);
    expect(output).toStrictEqual({
      items: [entity.toJSON()],
      total: 1,
      current_page: 1,
      per_page: 2,
      last_page: 1,
    });
  });

  it('should return output sorted by created_at when input param is empty', async () => {
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
        created_at: new Date(new Date().getTime() + 100),
      }),
    ];
    repository.items = items;

    const output = await useCase.execute({});
    expect(output).toStrictEqual({
      items: [...items].reverse().map((i) => i.toJSON()),
      total: 2,
      current_page: 1,
      per_page: 15,
      last_page: 1,
    });
  });
});
