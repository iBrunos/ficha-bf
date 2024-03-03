import { IsString } from 'class-validator';

export class UpdateServiceDto {

  @IsString()
  readonly name: string;

  @IsString()
  readonly price: string;

  @IsString()
  readonly time: string;

}