import express from 'express';
import cookieParser from 'cookie-parser';
import { port } from './config/config.js';
import connectDB from './config/db.js';
import userRouter from './routers/user.router.js';
import memberRouter from './routers/members.router.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRouter)
app.use('/api/members', memberRouter)

connectDB()

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})