import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const memberSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        manager: {
            type: ObjectId,
            ref:'Users'
        }
    },

    {
        timestamps: true,
    }
);

const MemberModel = mongoose.model('Members', memberSchema);

export default MemberModel