import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Schedule {
  @Prop()
  nameClient: string;

  @Prop()
  nameEmployee: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  service: string;

  @Prop()
  price: string;

  @Prop()
  time: string;
  
  @Prop()
  serviceDuration: string;

  @Prop()
  dateAndTime: string;

  @Prop()
  active: boolean;

}

export const SchedulesSchema = SchemaFactory.createForClass(Schedule);