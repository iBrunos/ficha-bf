import { IsOptional, IsString } from 'class-validator';

export class UpdateAppearanceDto {

  @IsOptional()
  @IsString()
  readonly botMessageBackgroundColor: string;

  @IsOptional()
  @IsString()
  readonly clientMessageBackgroundColor: string;

  @IsOptional()
  @IsString()
  readonly buttonBackgroundColor: string;

  @IsOptional()
  @IsString()
  readonly buttonHoverColor: string;

  @IsOptional()
  @IsString()
  readonly backgroundColor: string;

  @IsOptional()
  @IsString()
  readonly pageTextColor: string;

  @IsOptional()
  @IsString()
  readonly serviceCardBackgroundColor: string;

  @IsOptional()
  @IsString()
  readonly employeeCardBackgroundColor: string;

  @IsOptional()
  @IsString()
  readonly cardsTextColor: string;

  @IsOptional()
  @IsString()
  readonly text_A_Color: string;

  @IsOptional()
  @IsString()
  readonly text_B_Color: string;

  @IsOptional()
  @IsString()
  readonly dateTextColor: string;

  @IsOptional()
  @IsString()
  readonly timeTextColor: string;

  @IsOptional()
  @IsString()
  readonly employeeTextColor: string;

  @IsOptional()
  @IsString()
  readonly serviceTextColor: string;

  @IsOptional()
  @IsString()
  readonly priceTextColor: string;

  @IsOptional()
  @IsString()
  readonly cancelButtonTextColor: string;

  @IsOptional()
  @IsString()
  readonly cancelButtonBackgroundColor: string;

  @IsOptional()
  @IsString()
  readonly cancelButtonHoverColor: string;

  @IsOptional()
  @IsString()
  readonly cardBackgroundColor: string;
}