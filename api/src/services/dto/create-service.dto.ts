import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly price: string;

  @IsNotEmpty()
  @IsString()
  readonly time: string;

}
