import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,

        },
        password: {
            type: String,
            required: true,
        }
    },

    {
        timestamps: true,
    }
);

const UserModel = mongoose.model('Users', userSchema);

export default UserModel