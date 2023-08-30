import { IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateUserUseCase } from '../../../application';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto
  extends CreateUserDto
  implements Omit<UpdateUserUseCase.Input, 'id'>
{
  @ApiProperty({
    type: 'boolean',
    example: 'true',
  })
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
