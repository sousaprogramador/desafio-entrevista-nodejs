import { Company } from '../../domain/entities/Company';
import { CompanyOutputMapper } from './Company-output.dto';

describe('TypeCompanyOutputMapper Unit Tests', () => {
  it('should convert a typeCompany in output', () => {
    const created_at = new Date();
    const updated_at = new Date();
    const entity = new Company({
      name: 'some name',
      government_code: '12345',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: 'rs',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
      created_at,
      updated_at,
    });
    const spyToJSON = jest.spyOn(entity, 'toJSON');
    const output = CompanyOutputMapper.toOutput(entity);
    expect(spyToJSON).toHaveBeenCalled();
    expect(output).toStrictEqual({
      id: entity.id,
      name: 'some name',
      government_code: '12345',
      address: 'some address',
      address_number: ' some address_number',
      neighborhood: 'some neighborhood',
      city: 'some city',
      state: 'rs',
      zip_code: 'some zip_code',
      vacancies_cars: 0,
      vacancies_motorcycle: 0,
      created_at,
      updated_at,
    });
  });
});
