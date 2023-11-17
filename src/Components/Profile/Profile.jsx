import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Villager from "../Villagers/Villager";
import WholesalerProduct from "../WholeSaler/WholesalerProduct";
import AddWorker from "../Worker/AddWorker";

const Profile = props => {
  let userLog = JSON.parse(localStorage.getItem("Loggedin"));

  let navigate = useNavigate();

  let handLogout = () => {
    localStorage.removeItem("Loggedin");
    props.handelLogout();
  };

  return (
    <>
      <div id="profile-main-container">
        {userLog.type === "villager" ? (
          <img
            src="https://images.unsplash.com/photo-1518977081765-9b1b0c2538e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvYXJ0JTIwcHJvZmlsZSUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="village"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvYXJ0JTIwcHJvZmlsZSUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="man"
          />
        )}
        <h3>Mail:- {userLog.mail}</h3>
        <h4>Type :- {userLog.type}</h4>
        <button onClick={handLogout}>Logout</button>
      </div>

      {userLog.type === "villager" ? (
        <>
          <Villager />
          <AddWorker />
        </>
      ) : (
        <WholesalerProduct />
      )}
    </>
  );
};

export default Profile;
