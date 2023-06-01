import Entity from '../../../@seedwork/domain/entity/entity';
import UniqueEntityId from '../../../@seedwork/domain/value-objetcs/unique-entity-id.vo';
import CompanyValidatorFactory from '../validator/company.validator';
import { EntityValidationError } from '../../../@seedwork/domain/errors/validation-error';

export type CompanyProperties = {
  name: string;
  government_code: string;
  address: string;
  address_number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  vacancies_cars: number;
  vacancies_motorcycle: number;
  created_at?: Date;
  updated_at?: Date;
};

export type CompanyPropsJson = Required<{ id: string } & CompanyProperties>;

export class Company extends Entity<CompanyProperties> {
  constructor(public readonly props: CompanyProperties, id?: UniqueEntityId) {
    super(props, id);
    Company.validate(props);
    this.name = this.props.name;
    this.government_code = this.props.government_code;
    this.address = this.props.address;
    this.address_number = this.props.address_number;
    this.neighborhood = this.props.neighborhood;
    this.city = this.props.city;
    this.state = this.props.state;
    this.zip_code = this.props.zip_code;
    this.vacancies_cars = this.props.vacancies_cars;
    this.vacancies_motorcycle = this.props.vacancies_motorcycle;
    this.props.created_at = this.props.created_at ?? new Date();
    this.props.updated_at = this.props.updated_at ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get government_code() {
    return this.props.government_code;
  }

  private set government_code(value: string) {
    this.props.government_code = value;
  }

  get address() {
    return this.props.address;
  }

  private set address(value: string) {
    this.props.address = value;
  }

  get address_number() {
    return this.props.address_number;
  }

  private set address_number(value: string) {
    this.props.address_number = value;
  }

  get neighborhood() {
    return this.props.neighborhood;
  }

  private set neighborhood(value: string) {
    this.props.neighborhood = value;
  }

  get city() {
    return this.props.city;
  }

  private set city(value: string) {
    this.props.city = value;
  }

  get state() {
    return this.props.state;
  }

  private set state(value: string) {
    this.props.state = value;
  }

  get zip_code() {
    return this.props.zip_code;
  }

  private set zip_code(value: string) {
    this.props.zip_code = value;
  }

  get vacancies_cars() {
    return this.props.vacancies_cars;
  }

  private set vacancies_cars(value: number) {
    this.props.vacancies_cars = value;
  }

  get vacancies_motorcycle() {
    return this.props.vacancies_motorcycle;
  }

  private set vacancies_motorcycle(value: number) {
    this.props.vacancies_motorcycle = value;
  }

  get created_at() {
    return this.props.created_at;
  }

  get updated_at() {
    return this.props.updated_at;
  }

  static validate(props: CompanyProperties) {
    const validator = CompanyValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  toJSON(): CompanyPropsJson {
    return {
      id: this.id.toString(),
      name: this.name,
      government_code: this.government_code,
      address: this.address,
      address_number: this.address_number,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      zip_code: this.zip_code,
      vacancies_cars: this.vacancies_cars,
      vacancies_motorcycle: this.vacancies_motorcycle,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
