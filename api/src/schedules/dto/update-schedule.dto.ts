import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateScheduleDto {

  @IsOptional()
  @IsString()
  readonly nameClient: string;

  @IsOptional()
  @IsString()
  readonly nameEmployee: string;

  @IsOptional()
  @IsString()
  readonly service: string;
 
  @IsOptional()
  @IsString()
  readonly email: string;
 
  @IsOptional()
  @IsString()
  readonly phone: string;
 
  @IsOptional()
  @IsString()
  readonly price: string;
 
  @IsOptional()
  @IsBoolean()
  readonly active: boolean;
 
  @IsOptional()
  @IsString()
  readonly time: string;

  @IsOptional()
  @IsString()
  readonly serviceDuration: string;
 
  @IsOptional()
  @IsOptional()
  readonly duration: string;
 
  @IsOptional()
  @IsNotEmpty()
  readonly dateAndTime: string;
}
