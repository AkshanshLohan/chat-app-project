const express=require("express");
const dotenv=require("dotenv");
dotenv.config({});
const app=express();
const PORT=process.env.PORT;
const connectDB=require("./config/database.js");
const userRouter=require("./routes/userRoute.js");
const messageRouter=require("./routes/messageRoute.js");
const cookieParser=require("cookie-parser");

//middleware
app.use(express.json());//for parsing the body of request
app.use(cookieParser());

//Router
app.use("/api/v1/user",userRouter);
app.use("/api/v1/message",messageRouter);
app.listen(PORT,()=>{
    connectDB();
    console.log(`app is listening at ${PORT}`);
})