import { IsBoolean, IsString, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class TimeSlotDto {
  @IsString()
  time: string;

  @IsBoolean()
  active: boolean;
}

export class UpdateEmployeesDto {

  @IsOptional()
  @IsString()
  readonly name: string;
  
  @IsOptional()
  @IsString()
  readonly role: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  readonly services: string;

  @IsOptional()
  @IsString()
  readonly workingDay: string;

  @IsOptional()
  @IsString()
  readonly startTimePause: string;

  @IsOptional()
  @IsString()
  readonly endTimePause: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsMonday: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsTuesday: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsWednesday: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsThursday: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsFriday: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsSaturday: TimeSlotDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsSunday: TimeSlotDto[];
}
