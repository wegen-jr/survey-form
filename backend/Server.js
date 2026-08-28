require("dotenv").config();
const express=require('express');
const connectDB = require('./config/db');
const app=express();
const cors=require('cors');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
connectDB();

app.use('/api/surveys',require('./routes/surveyRoute'));
app.listen(5000,()=>{
    console.log('server listen port 5000..');
})