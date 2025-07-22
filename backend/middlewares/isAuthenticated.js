const JWT=require("jsonwebtoken");
const isAuthenticated=async (req,res,next)=>{
    try{
      const token=req.cookies.token;
      if(!token) {
        return res.status(401).json({message:"user not authenticated"})
      };

      const decode=await JWT.verify(token,process.env.JWT_SECRET_KEY);
      console.log(decode);
      if(decode){
       req.id=decode.userId;
      }
      else{
          return res.status(401).json({message:"invalid token"});
      }

      console.log(token);
      next();
    }
    catch(error){
        console.log(error);
    }
}
module.exports={
    isAuthenticated
}