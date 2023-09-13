import Jwt from "jsonwebtoken";
import { JWT_Secret } from "../config/config.js";
export const authenticate = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(403).send({status: false, message: 'access denied. you are not authorized'});
    try {
        const decoded = Jwt.verify(token, JWT_Secret)

        req.user = decoded;

        next()

    } catch (error) {
        console.log('twt verification failed', error);
    }

}