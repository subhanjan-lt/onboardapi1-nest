import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeaderKeysDocument = HeaderKeyMaster & Document;

@Schema()
export class HeaderKeyMaster {
    @Prop( {required: true} )
    valid_key: string;
}

export const HeaderKeyMasterSchema = SchemaFactory.createForClass(HeaderKeyMaster);