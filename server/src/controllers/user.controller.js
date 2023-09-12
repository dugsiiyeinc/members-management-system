import { JWT_Secret } from "../config/config.js";
import UserModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/password.util.js";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {

    try {
        const { fullname, username, email, password } = req.body;

        const userExists = await UserModel.findOne({ email: email.toLowerCase() })

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

        const { email, username, password } = req.body;

        const userExists = await UserModel.findOne({
            $or: [
                email ? { email: email.toLowerCase() } : { email },
                username ? { username: username.toLowerCase() } : { username },
            ]
        })

        if (!userExists) {
            return res.status(404).send({ status: false, message: 'User not found' });
        }

        const comparedPassword = await comparePassword(password, userExists.password)
        console.log(password, userExists.password)

        console.log(comparedPassword);
        if (!comparedPassword) {
            return res.status(401).send({ status: false, message: 'invalid username or password' });
        }

        const token = jwt.sign({ id: userExists._id }, JWT_Secret)
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 15 * 24 * 60 * 60 * 1000
        });

        res.status(200).send({
            status: true,
            message: "you have successfully logged in"
        });

    } catch (error) {
        console.log('error at login', error);
    }

}