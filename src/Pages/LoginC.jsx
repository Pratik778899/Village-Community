import React from "react";
import Login from "../Components/Login/Login";
import { useNavigate } from 'react-router-dom';

const LoginC = props => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // props.setIsLoggedIn(true);
    navigate("/");
  };

  return <Login handleLogin={handleLogin} />;
};

export default LoginC;
