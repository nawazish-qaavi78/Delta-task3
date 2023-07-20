const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    cors = require('cors'),
    dotenv = require("dotenv").config();

const User = require('./models/user.js'),
    Quizz = require('./models/quizz.js');

const userRoutes = require('./Routes/userRoutes.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(express.json());
app.use('api/users', userRoutes)

mongoose.connect(process.env.MONGOOSE_STRING)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log(err);
    })



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})