const {conversation}=require("../models/conversationModel.js");
const {Message}=require("../models/messageModel.js");
const sendMessage=async (req,res)=>{
    try{
       const senderId=req.id;
       const recieverId=req.params.id;
       const {message}=req.body;
       let getConversation=await conversation.findOne({
           participants:{$all: [senderId,recieverId]}
       });
       if(!getConversation){
            getConversation=await conversation.create({
                participants:[senderId,recieverId]
            })
       }
       const newMessage=await Message.create({
            senderId,
            recieverId,
            message
       });
       if(newMessage){
          getConversation.messages.push(newMessage._id);
       }
       await getConversation.save();
       //SOCKET IO

    }
    catch(error){
        console.log(error);
    }
}
const getMessages=async (req,res) =>{
    try{
        const recieverId=req.params.id;
        const senderId=req.id;
        const conversations=await conversation.findOne({
            participants:{$all: [senderId,recieverId]}
        }).populate("messages");
             console.log(conversations);
             return res.status(200).json({
                success:true,
                messages:conversations?.messages
             })
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    sendMessage,
    getMessages
};

