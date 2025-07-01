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
const Conversation=mongoose.model("Conversation",conversationModel);
module.exports={
    Conversation
}