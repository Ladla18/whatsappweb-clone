import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
  const {loading,conversations} = useGetConversation()
  console.log("COnVERSATIONS = ",conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conv,idx)=>(
        <Conversation key={conv._id} conversation={conv} lastIdx ={idx==conversations.length-1} emoji = {getRandomEmoji()} />
      ))}
      {loading?<span className='loading loading-spinner mx-auto'></span>:null}
    </div>
  )
}

export default Conversations


// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations