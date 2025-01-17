import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Date }) // Change type to Date
  date: Date;

  @Prop({}) // Change type to string
  time: string;

  @Prop({ enum: ['How to Live', 'How to Learn'], required: true })
  type: string;

  @Prop({ type: [String], required: true })
  school: string[];

  @Prop({ enum: ['Active', 'Pending', 'Done', 'Disable'], default: 'Pending' })
  status: string;

  @Prop({ type: Number, default: 0 })
  participateRate: number;

  @Prop({ type: Number, default: 0 })
  rating: number;

  @Prop({ type: Number, default: 0 })
  reviews: number;

  @Prop()
  picture: string;

  @Prop({ required: true })
  place: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
