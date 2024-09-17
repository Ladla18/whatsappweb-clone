import React from "react";
import Home from "./pages/home/Home";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
const App = () => {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 h-screen flex item-center justify-center">
      <Toaster />
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Login />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
};

export default App;
