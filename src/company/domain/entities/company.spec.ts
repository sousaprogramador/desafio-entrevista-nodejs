import { omit } from 'lodash';
import { Company } from './Company';

describe('Company Unit Test', () => {
  beforeEach(() => {
    Company.validate = jest.fn();
  });
  test('contructor of TypeCompany', () => {
    let company = new Company({
      name: '',
      government_code: '',
      address: '',
      address_number: '',
      neighborhood: '',
      city: '',
      state: '',
      zip_code: '',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
    });
    let props = omit(company.props, 'created_at', 'updated_at');

    expect(Company.validate).toHaveBeenCalled();
    expect(props).toStrictEqual({
      name: '',
      government_code: '',
      address: '',
      address_number: '',
      neighborhood: '',
      city: '',
      state: '',
      zip_code: '',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
    });

    expect(company.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    company = new Company({
      name: 'some name',
      government_code: 'some government_code',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: 'some state',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
      created_at,
    });

    props = omit(company.props, 'updated_at', 'deleted_at');

    expect(props).toStrictEqual({
      name: 'some name',
      government_code: 'some government_code',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: 'some state',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
      created_at,
    });
  });

  test('getter and setter of type prop', () => {
    const typeCompany = new Company({
      name: 'some name',
      government_code: 'some government_code',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: 'some state',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
    });
    expect(typeCompany.name).toBe('some name');

    typeCompany['name'] = 'new name';
    expect(typeCompany.name).toBe('new name');
  });

  it('should update a company', () => {
    const company = new Company({
      name: 'some name',
      government_code: 'some government_code',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: 'some state',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
    });
    company.update({
      name: 'some updated',
      government_code: 'some government_updated',
      address: 'some address_updated',
      address_number: 'some address_number_updated',
      neighborhood: 'some neighborhood_updated',
      city: 'some city_updated',
      state: 'to',
      zip_code: 'some zip_code_updated',
      vacancies_cars: 1,
      vacancies_motorcycle: 5,
    });
    expect(Company.validate).toHaveBeenCalledTimes(2);
    expect(company.name).toBe('some updated');
    expect(company.government_code).toBe('some government_updated');
    expect(company.address).toBe('some address_updated');
    expect(company.address_number).toBe('some address_number_updated');
    expect(company.neighborhood).toBe('some neighborhood_updated');
    expect(company.city).toBe('some city_updated');
    expect(company.state).toBe('to');
    expect(company.zip_code).toBe('some zip_code_updated');
    expect(company.vacancies_cars).toBe(1);
    expect(company.vacancies_motorcycle).toBe(5);
  });

  //Aqui eu poderia testa os restanteres de getters and setters
});
