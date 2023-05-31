import { Company } from '../../domain/entities/company';
import CompanyInMemoryRepository from './company-in-memory.repository';

describe('CompanyInMemoryRepository', () => {
  let repository: CompanyInMemoryRepository;

  beforeEach(() => (repository = new CompanyInMemoryRepository()));
  it('should sort by name', async () => {
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
      }),
      new Company({
        name: 'b',
        government_code: '1234',
        address: 'some address',
        address_number: ' some address_number',
        neighborhood: 'some neighborhood',
        city: 'some city',
        state: '12',
        zip_code: 'some zip_code',
      }),
      new Company({
        name: 'a',
        government_code: '1234',
        address: 'some address',
        address_number: ' some address_number',
        neighborhood: 'some neighborhood',
        city: 'some city',
        state: '12',
        zip_code: 'some zip_code',
      }),
    ];

    let itemsSorted = await repository['applySort'](items, 'name', 'asc');
    expect(itemsSorted).toStrictEqual([items[2], items[1], items[0]]);

    itemsSorted = await repository['applySort'](items, 'name', 'desc');
    expect(itemsSorted).toStrictEqual([items[0], items[1], items[2]]);
  });

  it('should sort by created_at when sort param is null', async () => {
    const created_at = new Date();
    const items = [
      new Company({
        name: 'test',
        government_code: '1234',
        address: 'some address',
        address_number: ' some address_number',
        neighborhood: 'some neighborhood',
        city: 'some city',
        state: '12',
        zip_code: 'some zip_code',
        created_at: created_at,
      }),
      new Company({
        name: 'TEST',
        government_code: '1234',
        address: 'some address',
        address_number: ' some address_number',
        neighborhood: 'some neighborhood',
        city: 'some city',
        state: '12',
        zip_code: 'some zip_code',
        created_at: new Date(created_at.getTime() + 100),
      }),
      new Company({
        name: 'fake',
        government_code: '1234',
        address: 'some address',
        address_number: ' some address_number',
        neighborhood: 'some neighborhood',
        city: 'some city',
        state: '12',
        zip_code: 'some zip_code',
        created_at: new Date(created_at.getTime() + 200),
      }),
    ];

    let itemsSorted = await repository['applySort'](items, null, null);
    expect(itemsSorted).toStrictEqual([items[2], items[1], items[0]]);
  });
});
