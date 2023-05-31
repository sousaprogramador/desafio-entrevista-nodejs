import Entity from '../../../@seedwork/domain/entity/entity';

export type CompanyProperties = {
  name: string;
  government_code: string;
  address: string;
  address_number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  created_at: Date;
  updated_at: Date;
};

export class Company extends Entity<CompanyProperties> {}
