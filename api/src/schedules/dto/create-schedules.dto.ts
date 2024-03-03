import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  readonly nameClient: string;

  @IsNotEmpty()
  @IsString()
  readonly nameEmployee: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly service: string;

  @IsNotEmpty()
  @IsString()
  readonly price: string;

  @IsNotEmpty()
  @IsString()
  readonly time: string;

  @IsNotEmpty()
  @IsString()
  readonly serviceDuration: string;

  @IsNotEmpty()
  @IsString()
  readonly dateAndTime: string;
  
  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}