import express from 'express';
import { loginUser, registerUser } from '../controllers/user.controller.js';
import { validateUserRegistration } from '../validations/user.vallidation.js';

const userRouter = express.Router();

userRouter.post('/register', validateUserRegistration, registerUser);
userRouter.post('/login', loginUser);

export default userRouter;