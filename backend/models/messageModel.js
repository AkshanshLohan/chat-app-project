const mongoose=require("mongoose");
const ObjectId=mongoose.Types.ObjectId
const messageModel=new mongoose.Schema({
      senderId :{
        type : ObjectId,
        ref : "User",
        required: true
      },
      recieverId: {
        type: ObjectId,
        ref: "User",
        required: true
      },
      message: {
        type: String,
        required: true
      }
},{timestamps: true});
const Message=mongoose.model("Message",messageModel);
module.exports={
    Message
}