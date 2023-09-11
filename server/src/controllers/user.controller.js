import UserModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/password.util.js";

export const registerUser = async (req, res) => {

    try {
        const { fullname, username, email, password } = req.body;

        const userExists = await UserModel.findOne({ email })

        if (userExists) {
            return res.status(400).send({ status: false, message: "User already exists" })
        }

        const hashedPassword = await hashPassword(password)

        const user = new UserModel({
            fullname,
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: hashedPassword
        });

        await user.save();

        res.status(201).send({ status: true, message: `${user.fullname} saved successfully` });

    } catch (error) {
        console.log('error at user registration', error);
        res.status(500).send({ status: false, message: 'unknown error' });
    }

}
export const loginUser = async (req, res) => {

    try {
        
        const { username, email, password } = req.body;

        const userExists = await UserModel.findOne({username: username.toLowerCase(), email: email.toLowerCase()})

        if(!userExists){
            return res.status(401).send({status: false, message: 'User not found'});
        }

        const comparedPassword = await comparePassword(password, userExists.password)

        if(!comparedPassword){
            return res.status(401).send({status: false, message: 'invalid username or password'});
        }

        

    } catch (error) {
        console.log('error at login', error);
    }

}