import CompanyValidatorFactory, { CompanyValidator } from './company.validator';

describe('TypeCompanyValidator Tests', () => {
  let validator: CompanyValidator;

  beforeEach(() => (validator = CompanyValidatorFactory.create()));

  test('invalidation cases for type field', () => {
    expect({ validator, data: null }).containsErrorMessages({
      name: [
        'type must be a string conforming to the specified constraints',
        'type should not be empty',
      ],
    });

    expect({ validator, data: { name: null } }).containsErrorMessages({
      name: [
        'type must be a string conforming to the specified constraints',
        'type should not be empty',
      ],
    });

    expect({ validator, data: { name: null } }).containsErrorMessages({
      name: [
        'type must be a string conforming to the specified constraints',
        'type should not be empty',
      ],
    });

    expect({ validator, data: { name: '' } }).containsErrorMessages({
      name: ['name should not be empty'],
    });

    expect({ validator, data: { name: 1 as any } }).containsErrorMessages({
      name: [
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ],
    });

    expect({
      validator,
      data: { name: 't'.repeat(256) },
    }).containsErrorMessages({
      name: ['name must be shorter than or equal to 255 characters'],
    });
  });
});
