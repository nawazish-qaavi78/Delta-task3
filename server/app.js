import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import userRoutes from './Routes/userRoutes.js';
import quizzRoutes from './Routes/quizzRoutes.js';


const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/quizz', quizzRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})