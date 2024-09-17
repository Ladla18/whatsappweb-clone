import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId } from "../socket/socket.js";
import io from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  console.log("Message sent called");
  try {
    const { message } = req.body;
  
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }
    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })
    if(newMessage){
        conversation.messages.push(newMessage._id)
    }
    await Promise.all([conversation.save(),newMessage.save()])
    //SOCKET IO Functionallity goes here

    const recieverSocketId  = getRecieverSocketId(receiverId);
    if(recieverSocketId){
      io.to(recieverSocketId).emit("newMessage",newMessage)
    }

    res.status(200).json(newMessage)
  } catch (error) {
    console.error("message.controller.js", " :: Error ❌ : ", error);
  }
};

export const getMessages = async(req,res)=>{
console.log("GET MESSAGES CALLED")
    try {

        const {id} = req.params;
       
        
        const senderId = req.user._id;
        const  conversation = await Conversation.findOne({
            participants: { $all: [senderId, id] },
        }).populate('messages')
        if(!conversation){
          console.log("No mEssage found")
            return res.status(404).json({message: "Conversation not found"})
        }
        else{
          console.log("Message found")
          return res.status(200).json(conversation.messages);
        }

    } catch (error) {
        console.error("message.controller.js get message", " :: Error ❌ : ", error);
    }

}