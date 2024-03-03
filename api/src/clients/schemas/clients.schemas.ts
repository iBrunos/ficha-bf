import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Client {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  birthdayDate: string;

  @Prop()
  gender: string;

  @Prop()
  children: number;

  @Prop()
  phone: string;


}

export const ClientsSchema = SchemaFactory.createForClass(Client);