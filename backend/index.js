const express=require("express");
const dotenv=require("dotenv");
dotenv.config({});
const app=express();
const PORT=process.env.PORT;
const connectDB=require("./config/database.js");


app.listen(PORT,()=>{
    connectDB();
    console.log(`app is listening at ${PORT}`);
})