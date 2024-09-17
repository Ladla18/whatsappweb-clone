import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    // Only connect if authUser exists
    if (authUser) {
      // Avoid shadowing the state variable "socket"
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });
      
      setSocket(newSocket);

      // Handle receiving the list of online users
      newSocket.on("Get Online USer", (users) => {
        setOnlineUsers(users);
        console.log(users);
      });

      // Clean up the socket connection when the component unmounts
      return () => {
        newSocket.close();
      };
    } else if (socket) {
      // Close the socket if the user logs out
      socket.close();
      setSocket(null); // Reset the socket state
    }
  }, [authUser]); // Dependency array includes authUser

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
