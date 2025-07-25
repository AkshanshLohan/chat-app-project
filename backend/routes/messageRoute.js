const {Router}=require("express");
const messageRouter=Router();
const {isAuthenticated}=require("../middlewares/isAuthenticated.js");
const {sendMessage,getMessages}=require("../controllers/messageController.js");
messageRouter.post("/send/:id",isAuthenticated,sendMessage);
messageRouter.get("/:id",isAuthenticated,getMessages);
module.exports= messageRouter;

