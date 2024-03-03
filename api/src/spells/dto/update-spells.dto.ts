import { IsString, IsNumber } from 'class-validator';

export class UpdateSpellDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly releaseTime: string;

  @IsString()
  readonly range: string;

  @IsString()
  readonly duration: string;

  @IsNumber()
  readonly description: string;
}