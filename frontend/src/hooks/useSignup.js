import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()
  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "https://whatsappweb-clone.onrender.com/api/auth/signup",
        {
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }
      );
      const data = res.data; // Access the response data directly
      console.log(data);
      if(data.error){
        throw new Error(data.error)
      }
      // Local storage
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      console.error("useSignup.js", " :: Error ❌ : ", error);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
