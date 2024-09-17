import axios from "axios";
import { useContext, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    const success = handleInputErrors({
      username,
      password,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await axios.post(
        "https://whatsappweb-clone.onrender.com/api/auth/login",
        {
          username,
          password,
        }
      );
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.error("useLogin.jsx", " :: Error ❌ : ", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }

  return true;
}
