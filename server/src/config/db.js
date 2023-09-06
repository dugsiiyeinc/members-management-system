import mongoose from "mongoose";
import { dbURL } from "./config.js";

const connectDb = async()=>{
    try{

        await mongoose.connect(dbURL)
        
        console.log("Database Connect Succefully⭐")

    }catch(error){
        console.log("Error Mongo Connection Flied🤷‍♂️" , error)

    }
}


export default connectDb;
