import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import ClassValidatorFields from '../../../@seedwork/domain/validators/class-validator-fields';
import { CompanyProperties } from '../entities/company';

export class CompanyRules {
  @IsOptional()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @MaxLength(14)
  @IsString()
  @IsNotEmpty()
  government_code: string;

  @IsOptional()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  address_number: string;

  @IsOptional()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsOptional()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsOptional()
  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  state: string;

  @IsOptional()
  @MaxLength(14)
  @IsString()
  @IsNotEmpty()
  zip_code: string;

  @IsDate()
  @IsOptional()
  created_at: Date;

  @IsDate()
  @IsOptional()
  updated_at: Date;

  constructor({
    name,
    government_code,
    address,
    address_number,
    neighborhood,
    city,
    state,
    zip_code,
    created_at,
    updated_at,
  }: CompanyProperties) {
    Object.assign(this, {
      name,
      government_code,
      address,
      address_number,
      neighborhood,
      city,
      state,
      zip_code,
      created_at,
      updated_at,
    });
  }
}

export class CompanyValidator extends ClassValidatorFields<CompanyRules> {
  validate(data: CompanyProperties): boolean {
    return super.validate(new CompanyRules(data ?? ({} as any)));
  }
}

export class CompanyValidatorFactory {
  static create() {
    return new CompanyValidator();
  }
}

export default CompanyValidatorFactory;
