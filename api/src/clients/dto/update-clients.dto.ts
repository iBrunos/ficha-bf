import { IsString, IsNumber } from 'class-validator';

export class UpdateClientDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly birthdayDate: string;

  @IsString()
  readonly gender: string;

  @IsNumber()
  readonly children: number;

  @IsString()
  readonly phone: string;
}
