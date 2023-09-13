import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'
import { port } from './config/config.js';
import connectDB from './config/db.js';
import userRouter from './routers/user.router.js';
import memberRouter from './routers/members.router.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet())

app.use(
    rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 10,
        message: 'Rate limit exceeded'
    })
)

app.use('/api/users', userRouter)
app.use('/api/members', memberRouter)

connectDB()

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})