const mongoose=require("mongoose");
const ObjectId=mongoose.Types.ObjectId;

const conversationModel=new mongoose.Schema({
      participants: [{
        type: ObjectId,
        ref: "User"
      }],
        messages: [{
        type: ObjectId,
        ref: "Message"
      }],
},{timestamps: true});
const conversation=mongoose.model("conversation",conversationModel);
module.exports={
    conversation
}