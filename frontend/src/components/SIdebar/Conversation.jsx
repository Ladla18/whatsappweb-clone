import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/socketContext';

const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation,setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id===conversation._id

  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  console.log("Online user is",isOnline)
  return (
    <>
    <div onClick={()=>{setSelectedConversation(conversation)}}className={`flex gap-2 itme-center hover:bg-sky-500 rounde-0 p-2 py-1 cursor-pointer ${isSelected?"bg-sky-500":""}`}>
        <div className={`avatar ${isOnline ? "online":""}`}>
          <div className="w-12 rounded-full ">
            <img
              src={conversation.profilePic}
              alt="User Avatar"
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullname}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
      </div>
      {!lastIdx ? <div className='divider my-0 py-1 h-1'></div>:""}
    </>
  );
}

export default Conversation

// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 itme-center hover:bg-sky-500 rounde-0 p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full ">
//             <img
//               src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
//               alt="User Avatar"
//             />
//           </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-gray-200'>John Doe</p>
//                 <span className='text-xl'></span>
//             </div>
//         </div>
//       </div>
//       <div className='dividier my-0 py-0 h-1'></div>
//     </>
//   );
// }

// export default Conversation