import express from 'express';
import { port } from './config/config.js';
import connectDB from './config/db.js';

const app = express();


connectDB()

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})