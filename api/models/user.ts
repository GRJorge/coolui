import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';

const schema = new Schema(
    {
        username: { type: String, require: true, unique: true },
        email: { type: String, require: true, unique: true },
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
