const express = require('express');
require('dotenv').config();
const PORT = 5000 || process.env.PORT;
const app = express();
app.use(express.json());
const hostname = '0.0.0.0'
const Notes = require('./routes/Notes')


let cors = require("cors");
app.use(cors());

const mongoose = require('mongoose')


const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(() => {
    console.log("connected");
}).catch( e => console.log(e))

app.use('/notes',Notes)

app.listen(PORT,hostname,(req,res) => {
    console.log(`Listening at PORT : ${PORT}`)
})