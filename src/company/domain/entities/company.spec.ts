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
    });
    expect(typeCompany.name).toBe('some name');

    typeCompany['name'] = 'new name';
    expect(typeCompany.name).toBe('new name');
  });

  //Aqui eu poderia testa os restanteres de getters and setters
});
