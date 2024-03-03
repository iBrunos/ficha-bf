import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

class TimeSlotDto {
  @IsString()
  time: string;

  @IsBoolean()
  active: boolean;
}

export class PatchDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  services?: string;

  @IsOptional()
  @IsString()
  workingDay?: string;

  @IsOptional()
  @IsString()
  startTimePause?: string;

  @IsOptional()
  @IsString()
  endTimePause?: string;

  @IsOptional()
  @IsArray()
  timeSlotsMonday?: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  timeSlotsTuesday?: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  timeSlotsWednesday?: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  timeSlotsThursday?: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  timeSlotsFriday?: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  timeSlotsSaturday?: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  timeSlotsSunday?: TimeSlotDto[];
}

export class PartialUpdateEmployeeDto extends PartialType(PatchDto) {}
