import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({
  timestamps: true,
})
export class Appearance {
  @Prop({ required: true })
  botMessageBackgroundColor: string;

  @Prop({ required: true })
  clientMessageBackgroundColor: string;

  @Prop({ required: true })
  buttonBackgroundColor: string;

  @Prop({ required: true })
  buttonHoverColor: string;

  @Prop({ required: true })
  backgroundColor: string;

  @Prop({ required: true })
  pageTextColor: string;

  @Prop({ required: true })
  serviceCardBackgroundColor: string;

  @Prop({ required: true })
  employeeCardBackgroundColor: string;

  @Prop({ required: true })
  cardsTextColor: string;

  @Prop({ required: true })
  text_A_Color: string;

  @Prop({ required: true })
  text_B_Color: string;

  @Prop({ required: true })
  dateTextColor: string;

  @Prop({ required: true })
  timeTextColor: string;

  @Prop({ required: true })
  employeeTextColor: string;

  @Prop({ required: true })
  serviceTextColor: string;

  @Prop({ required: true })
  priceTextColor: string;

  @Prop({ required: true })
  cancelButtonTextColor: string;

  @Prop({ required: true })
  cancelButtonBackgroundColor: string;

  @Prop({ required: true })
  cancelButtonHoverColor: string;

  @Prop({ required: true })
  cardBackgroundColor: string;
}

export const AppearanceSchema = SchemaFactory.createForClass(Appearance);