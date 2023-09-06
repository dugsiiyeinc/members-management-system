import express from 'express';
import mongoose from 'mongoose';
import cors  from 'cors'
import UserModel from './models/Users.model.js';
import connectDb from './config/db.js';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/auth-dugsiiye-mentorship")




app.post('/register', async(req, res) => {
    try{

        const {name, email, password} = req.body
       const hashedPassword = await bcrypt.hash(password , 10)
       UserModel.create({name, email , password:hashedPassword})
       res.json("Register Successfuly")

    }catch(error){
        console.log("Error Register User...." ,error)
    }

    
    

    // .then(users => res.json(users))
    // .catch(err => res.json(err))

})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email, password: password})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("record is not exist")
        }
    })
})


connectDb()

app.listen(8000, () => {
    console.log("listening on port 8000")
})

