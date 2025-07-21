
const { Router } = require ("express");
const userRouter=Router();
const { register,login, logout }=require("../controllers/userController.js");

userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/logout",logout);
module.exports= userRouter;
