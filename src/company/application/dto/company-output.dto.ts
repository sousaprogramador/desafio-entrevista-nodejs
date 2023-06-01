import { Company } from '../../domain/entities/company';

export type CompanyOutput = {
  id: string;
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

export class CompanyOutputMapper {
  static toOutput(entity: Company): CompanyOutput {
    return entity.toJSON();
  }
}
