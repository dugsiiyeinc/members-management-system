import express from 'express';
import { port } from './config/config.js';
import connectDB from './config/db.js';
import userRouter from './routers/user.router.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRouter)

connectDB()

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})