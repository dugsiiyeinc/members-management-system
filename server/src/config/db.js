import mongoose from "mongoose";

import { dbURL } from "./config.js"

const connectDB = async () => {

    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database");
    } catch (err) {
        console.log("Error connecting to database", err);
        process.exit(1);
    }

}

export default connectDB