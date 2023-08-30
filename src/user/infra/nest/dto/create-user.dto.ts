import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserUseCase } from '../../../application';

export class CreateUserDto implements CreateUserUseCase.Input {
  @ApiProperty({
    type: 'string',
    example: 'Jhon Snow',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: 'string',
    example: 'jhon@mail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: 'string',
    example: 'secure',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
