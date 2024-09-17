import toast from "react-hot-toast"
import useConversation from "../zustand/useConversation"
import axios from "axios"
import { useState } from "react"

const useSendMessage = ()=>{
    const [loading,setLoading] = useState(false)
    const {messages,setMessages,selectedConversation} = useConversation()
    console.log("selected conversid",selectedConversation._id)
    const sendMessage = async (message) => {
      try {
        const res = await axios.post(
          `http://localhost:5000/api/messages/send/${selectedConversation._id}`,
          { message }
        );
        const data = res.data;
        if (data.error) throw new Error(data.error);
        setMessages([...messages, data]);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    return {sendMessage,loading}
}

export default useSendMessage