const mongoose=require("mongoose");
const MONGO_URL=process.env.MONGO_URL;
const connectDB=async ()=>{
    await mongoose.connect(MONGO_URL).then(()=>{
   console.log("database connected")}).
   catch((err)=>{console.log(err);})
}


module.exports=connectDB;



