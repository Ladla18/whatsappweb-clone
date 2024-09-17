import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetConversation = () => {
const [loading,setLooading] = useState(false);
const [conversations,setConversations] = useState([])
axios.defaults.withCredentials = true;
useEffect(()=>{
    const getConversation = async()=>{
        setLooading(true);

        try {
            const res = await axios.get(
              "https://whatsappweb-clone.onrender.com/api/users"
            );
            const data = res.data
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data)
        } catch (error) {
            console.error("useGetConversation.js", " :: Error ❌ : ", error);
        }finally{
            setLooading(false);
        }

    }
    getConversation()
},[])
return {loading,conversations}
}

export default useGetConversation