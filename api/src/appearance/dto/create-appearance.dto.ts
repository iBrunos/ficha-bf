import { IsOptional, IsString } from 'class-validator';

export class CreateDto {
  
  @IsString()
  botMessageBackgroundColor: string;

  @IsString()
  clientMessageBackgroundColor: string;

  @IsString()
  buttonBackgroundColor: string;

  @IsString()
  buttonHoverColor: string;

  @IsString()
  backgroundColor: string;

  @IsString()
  pageTextColor: string;

  @IsString()
  serviceCardBackgroundColor: string;

  @IsString()
  employeeCardBackgroundColor: string;

  @IsString()
  cardsTextColor: string;

  @IsString()
  text_A_Color: string;

  @IsString()
  text_B_Color: string;

  @IsString()
  dateTextColor: string;

  @IsString()
  timeTextColor: string;

  @IsString()
  employeeTextColor: string;

  @IsString()
  serviceTextColor: string;

  @IsString()
  priceTextColor: string;

  @IsString()
  cancelButtonTextColor: string;

  @IsString()
  cancelButtonBackgroundColor: string;

  @IsString()
  cancelButtonHoverColor: string;

  @IsString()
  cardBackgroundColor: string;
}