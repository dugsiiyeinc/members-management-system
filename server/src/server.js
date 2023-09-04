const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/auth-dugsiiye-mentorship")

app.post('/register', (req, res) => {
    
})

app.listen(8000, () => {
    console.log("listening on port 8000")
})