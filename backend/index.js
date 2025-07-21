const express=require("express");
const dotenv=require("dotenv");
dotenv.config({});
const app=express();
const PORT=process.env.PORT;
const connectDB=require("./config/database.js");
const userRouter=require("./routes/userRoute.js");

//middleware
app.use(express.json());//for parsing the body of request

//Router
app.use("/api/v1/user",userRouter);
app.listen(PORT,()=>{
    connectDB();
    console.log(`app is listening at ${PORT}`);
})