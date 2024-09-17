import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation} = useConversation();
  console.log("selected conversation id",selectedConversation._id)
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `https://whatsappweb-clone.onrender.com/api/messages/${selectedConversation._id}`
        );
        const data = res.data;
        
        if (data.error) throw new Error(data.error);
        setMessages(data);
        console.log("messages are",messages)
      } catch (error) {
        setMessages("")
        console.error("useGetMessages.js", " :: Error ❌ : ", error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { messages, loading };
};

export default useGetMessages;
