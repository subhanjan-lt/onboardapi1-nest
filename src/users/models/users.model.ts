import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document; //so we can autocomplete & use all functions related to documents i.e find, findOne etc.

@Schema()
export class Users {
  @Prop({ required: true })
  name: string;
  @Prop()
  mobile_number?: string;
  @Prop()
  city?: string;
  @Prop()
  zipcode?: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
