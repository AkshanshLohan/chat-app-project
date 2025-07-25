const User=require("../models/userModel.js");
const bcrypt=require("bcryptjs");
const JWT=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();
 const register=async (req,res)=>{
     try{
         const{ fullName,userName,password,confirmPassword,gender}=req.body;
         if(!fullName || !userName || !password || !confirmPassword || !gender){
            return res.status(400).json({message: "All fields are required"});
         }
         if(password !== confirmPassword){
            return res.status(400).json({message: "password mismatched"});
         }
         
         const user=await User.findOne({userName});
         if(user){
            return res.status(400).json({message: "user already exists"});
         }

         const hashedPassword=await bcrypt.hash(password,10);

         //profile photo
         const maleProfilePhoto=`https://avatar.iran.liara.run/public/boy?username=${userName}`;
          const femaleProfilePhoto=`https://avatar.iran.liara.run/public/girl?username=${userName}`;

         await User.create({
            fullName: fullName,
            userName: userName,
            password: hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender:gender
         })
         return res.status(201).json({
            message:"account created successfully",
            success: true
         })
     }
     catch(error){
        console.log(error);
        return res.status(500).json({message: "internal server error"});
     }
 }
 const login=async (req,res)=>{
     try{
      const {userName,password}=req.body;
      if(!userName || !password){
         return res.status(400).json({ message:"all fields required" });
      };
      const user=await User.findOne({userName});
      if(!user){
         return res.status(400).json({
            message:"username do not exist",
            success: false
         })
      }
      const isPasswordMatch=await bcrypt.compare(password,user.password);
      if(isPasswordMatch){
        const tokenData={userId:user._id }
        const token=await JWT.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'1d'});

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:'strict'}).json({
          _id:user._id,
           userName:user.userName,  
           fullName:user.fullName,
         profilePhoto:user.profilePhoto
       });
      }
      else{
          return res.status(403).json({message:"wrong password",
            success:false
         });
      }
      
     }
     catch(error){
        console.log(error);
     }

 }
 const logout=(req,res)=>{
   try{
     return res.status(200).cookie("token","",{maxAge:0}).json({
       message:"logged out successfully"
     });
   }
   catch(error){
      console.log(error);
   }
 }
 const getOtherUsers=async (req,res)=>{
   try{
      const loggedInUserId=req.id;
      const otherUsers=await User.find({_id:{$ne: loggedInUserId}}).select("-password");
      return res.status(200).json(otherUsers);
   }
   catch(error){
      console.log(error);
   }
 }
 module.exports={
    register,
    login,
    logout,
    getOtherUsers
 };