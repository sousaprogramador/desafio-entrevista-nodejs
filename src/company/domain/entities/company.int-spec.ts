import { Company } from './Company';

describe('Company Integration Tests', () => {
  describe('create method', () => {
    it('should a invalid Company using name property', () => {
      expect(
        () =>
          new Company({
            name: null,
            government_code: '12345678901234',
            address: 'some address',
            address_number: ' some address_number',
            neighborhood: 'some neighborhood',
            city: 'some city',
            state: 'so',
            zip_code: 'some zip_code',
            vacancies_cars: 0,
            vacancies_motorcycle: 0,
          }),
      ).containsErrorMessages({
        name: [
          'name must be a number conforming to the specified constraints',
          'name should not be empty',
        ],
      });

      expect(
        () =>
          new Company({
            name: 0 as any,
            government_code: '12345678901234',
            address: 'some address',
            address_number: ' some address_number',
            neighborhood: 'some neighborhood',
            city: 'some city',
            state: 'so',
            zip_code: 'some zip_code',
            vacancies_cars: 0,
            vacancies_motorcycle: 0,
          }),
      ).containsErrorMessages({
        name: [
          'name must be a string',
          'name must be shorter than or equal to 255 characters',
        ],
      });

      expect(
        () =>
          new Company({
            name: 't'.repeat(256),
            government_code: '12345678901234',
            address: 'some address',
            address_number: ' some address_number',
            neighborhood: 'some neighborhood',
            city: 'some city',
            state: 'so',
            zip_code: 'some zip_code',
            vacancies_cars: 0,
            vacancies_motorcycle: 0,
          }),
      ).containsErrorMessages({
        name: ['name must be shorter than or equal to 255 characters'],
      });
    });

    it('should a valid Company', () => {
      expect.assertions(0);

      new Company({
        name: 'some name',
        government_code: '12345678901234',
        address: 'some address',
        address_number: ' some address_number',
        neighborhood: 'some neighborhood',
        city: 'some city',
        state: 'so',
        zip_code: 'some zip_code',
        vacancies_cars: 0,
        vacancies_motorcycle: 0,
      });
    });
  });
});
