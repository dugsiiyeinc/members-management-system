import express from 'express';
import { loginUser, registerUser } from '../controllers/user.controller.js';
import { validateUserLogin, validateUserRegistration } from '../validations/user.validations.js';

const userRouter = express.Router();

userRouter.post('/register', validateUserRegistration, registerUser);
userRouter.post('/login', validateUserLogin, loginUser);

export default userRouter;