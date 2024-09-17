import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error("Search must be more than 3 letter")
    }
    const conversation = conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
    }
    else{
      toast.error("No such User found")
    }
  };
  return (
    <form action="" onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name=""
        id=""
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form action="" className="flex items-center gap-2">
//       <input
//         type="text"
//         className="input input-bordered rounded-full"
//         placeholder="Search.."
//         name=""
//         id=""
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
