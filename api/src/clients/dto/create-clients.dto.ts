import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsString()
  readonly birthdayDate: Date;

  @IsNotEmpty()
  @IsString()
  readonly gender: string;

  @IsNotEmpty()
  @IsNumber()
  readonly children: number;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;
}
