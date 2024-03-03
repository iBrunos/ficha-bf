import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Spell {
  @Prop()
  title: string;

  @Prop()
  releaseTime: string;

  @Prop()
  range: string

  @Prop()
  duration: string;

  @Prop()
  description: string;

  @Prop()
  spellLevel: string;
}

export const SpellsSchema = SchemaFactory.createForClass(Spell);