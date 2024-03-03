import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Employee {
  @Prop()
  name: string;

  @Prop()
  role: string;

  @Prop()
  services: string;

  @Prop()
  workingDay: string;

  @Prop()
  startTimePause: string;

  @Prop()
  endTimePause: string;

  @Prop({ type: [{ time: String, active: Boolean }], default: [] })
  timeSlotsMonday: { time: string; active: boolean }[];

  @Prop({ type: [{ time: String, active: Boolean }], default: [] })
  timeSlotsTuesday: { time: string; active: boolean }[];

  @Prop({ type: [{ time: String, active: Boolean }], default: [] })
  timeSlotsWednesday: { time: string; active: boolean }[];

  @Prop({ type: [{ time: String, active: Boolean }], default: [] })
  timeSlotsThursday: { time: string; active: boolean }[];

  @Prop({ type: [{ time: String, active: Boolean }], default: [] })
  timeSlotsFriday: { time: string; active: boolean }[];

  @Prop({ type: [{ time: String, active: Boolean }], default: [] })
  timeSlotsSaturday: { time: string; active: boolean }[];

  @Prop({ type: [{ time: String, active: Boolean }], default: [] })
  timeSlotsSunday: { time: string; active: boolean }[];

  @Prop()
  password: string;
}

export const EmployeesSchema = SchemaFactory.createForClass(Employee);
