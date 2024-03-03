import { IsBoolean, IsNotEmpty, IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class TimeSlotDto {
  @IsNotEmpty()
  @IsString()
  time: string;

  @IsBoolean()
  active: boolean;
}

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  readonly services: string;

  @IsNotEmpty()
  @IsString()
  readonly workingDay: string;

  @IsNotEmpty()
  @IsString()
  readonly startTimePause: string;

  @IsNotEmpty()
  @IsString()
  readonly endTimePause: string;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsMonday: TimeSlotDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsTuesday: TimeSlotDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsWednesday: TimeSlotDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsThursday: TimeSlotDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsFriday: TimeSlotDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsSaturday: TimeSlotDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  readonly timeSlotsSunday: TimeSlotDto[];
}