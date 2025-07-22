
const { Router } = require ("express");
const userRouter=Router();
const { register,login, logout , getOtherUsers}=require("../controllers/userController.js");
const { isAuthenticated } = require("../middlewares/isAuthenticated.js");

userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/logout",logout);
userRouter.get("/",getOtherUsers);
module.exports= userRouter;
