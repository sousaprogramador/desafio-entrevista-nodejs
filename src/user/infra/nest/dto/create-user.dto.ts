import {
  IsDate,
  IsBoolean,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { CreateUserUseCase } from '../../../application';

export class CreateUserDto implements CreateUserUseCase.Input {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  avatar?: string | null;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsDate()
  @IsOptional()
  created_at?: Date;
}
