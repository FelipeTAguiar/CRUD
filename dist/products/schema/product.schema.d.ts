import { Schema, Document } from 'mongoose';
export declare const ProductSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name: string;
    description: string;
    price: number;
    category: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    description: string;
    price: number;
    category: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    description: string;
    price: number;
    category: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Product extends Document {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
}
