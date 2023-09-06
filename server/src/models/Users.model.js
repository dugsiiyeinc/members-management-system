import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const UserModel = new mongoose.model("Users", UserSchema)

// module.exports = UserModel

export default UserModel;