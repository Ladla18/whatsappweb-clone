import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs,setInputs] = useState({
        fullname:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    });
    const {loading,signup}  = useSignup()
    const handleCheckboxChange = (gender)=>{
        setInputs({...inputs,gender})
    }
    const submithandler = async (e)=>{
        e.preventDefault();
        await signup(inputs)
    }
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center">
          Sign Up
          <span className="text-blue-500">Chat App</span>
        </h1>
        <form action="" onSubmit={submithandler}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base lable-text">Fullname</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered"
              placeholder="Johndoe"
              name=""
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
              id=""
              />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base lable-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered"
              placeholder="Username"
              value={inputs.username}
              
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              name=""
              id=""
              />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base lable-text">Password</span>
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="w-full input input-bordered"
              placeholder="1234.."
              name=""
              id=""
              />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base lable-text">Confirm Password</span>
            </label>
            <input
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              className="w-full input input-bordered"
              placeholder="1234.."
              name=""
              id=""
            />
          </div>
         <GenderCheckBox onCheckBoxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already Have An Account
          </Link>
          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading?<span className='loading loading-spinner'></span>:"Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup


// StARTER CODE
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox';

// const Signup = () => {
//   return (
//     <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center">
//           Sign Up
//           <span className="text-blue-500">Chat App</span>
//         </h1>
//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base lable-text">Fullname</span>
//             </label>
//             <input
//               type="text"
//               className="w-full input input-bordered"
//               placeholder="Johndoe"
//               name=""
//               id=""
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base lable-text">Username</span>
//             </label>
//             <input
//               type="text"
//               className="w-full input input-bordered"
//               placeholder="Username"
//               name=""
//               id=""
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base lable-text">Password</span>
//             </label>
//             <input
//               type="password"
//               className="w-full input input-bordered"
//               placeholder="1234.."
//               name=""
//               id=""
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base lable-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               className="w-full input input-bordered"
//               placeholder="1234.."
//               name=""
//               id=""
//             />
//           </div>
//          <GenderCheckBox/>

//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already Have An Account
//           </a>
//           <button className="btn btn-block btn-sm mt-2">SignUp</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup