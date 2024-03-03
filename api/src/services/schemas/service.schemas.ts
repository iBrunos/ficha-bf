import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Service {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  time: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
