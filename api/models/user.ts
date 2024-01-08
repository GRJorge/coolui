import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';

const schema = new Schema(
    {
        username: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        picture: { type: String, default: null },
        favPalettes: [ObjectId],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model('User', schema);
