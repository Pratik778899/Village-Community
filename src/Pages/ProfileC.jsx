import React from "react";
import Profile from "../Components/Profile/Profile";
import { useNavigate } from "react-router-dom";

const ProfileC = (props) => {
  const navigate = useNavigate();

  const handelLogout = () => {
    props.setLoginStatus(false);
    props.handelLogout();
    navigate("/");
  };

  return <Profile handelLogout={handelLogout}/>;
};

export default ProfileC;
