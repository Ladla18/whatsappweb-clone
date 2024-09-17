import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const  {loading,login} = useLogin()
  const handlesubmit = async(e)=>{
    e.preventDefault()
    await login(username,password)

  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 max-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center">
          Login
          <span className="text-blue-500">Chat App</span>
        </h1>
        <form action="" onSubmit={handlesubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              Username
            </label>
            <input
              type="text"
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              Password
            </label>
            <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              name=""
              id=""
            />
          </div>
          <Link
           to='/signup'
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Dont Have and Account?
          </Link>
          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading?<span className="loading spinner-loading"></span>:"Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


// STARTER CODE
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 max-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center">
//           Login
//           <span className="text-blue-500">Chat App</span>
//         </h1>
//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               Username
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//               name=""
//               id=""
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//               name=""
//               id=""
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Dont Have and Account?
//           </a>
//           <button className="btn btn-block btn-sm mt-2">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;