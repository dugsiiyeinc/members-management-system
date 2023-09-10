import mongoose from "mongoose";

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
        }
    },

    {
        timestamps: true,
    }
);

const MemberModel = mongoose.model('Members', memberSchema);

export default MemberModel