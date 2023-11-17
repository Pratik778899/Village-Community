import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import userData from "../../Database/UserData";

const SignUp = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [userType, setUserType] = useState("user");

  const handleSignUp = () => {
    if (mail && pass) {
      const existingData = JSON.parse(localStorage.getItem("userData")) || [];
      const userExists = existingData.some(user => user.mail === mail);

      if (userExists) {
        alert("Email already exists. Please choose a different email.");
      } else {
        const newUser = {
          mail: mail,
          password: pass,
          type: userType,
        };

        const existingData = JSON.parse(localStorage.getItem("userData")) || [];
        const updatedData = [...existingData, newUser];
        localStorage.setItem("userData", JSON.stringify(updatedData));

        alert("Signup successful!");
      }
    } else {
      alert("Please fill in all the fields");
    }
  };

  return (
    <>
      <div id="SignUp-main-container">
        <div id="SignUp-left">
          <div id="SignUp-container">
            <h2>Welcome To Village Community 👋</h2>
            <p>Please SignUp to you account and start the adventure</p>
            <div id="SignUp-main-container">
              <div id="SignUp-form">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={mail}
                  onChange={e => setMail(e.target.value)}
                  placeholder="Enter Your Email"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  placeholder="Enter Your Password"
                />
                <label htmlFor="userType">Select your role:</label>
                <select
                  id="userType"
                  name="userType"
                  value={userType}
                  onChange={e => setUserType(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="villager">Villager</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="retailer">Retailer</option>
                </select>
                <div id="Redirect">
                  <p>Already Have A Account</p>
                  <Link id="LoginRedirect" to="/Login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div id="SignUp-btn">
              <button onClick={handleSignUp}>SignUp</button>
            </div>
          </div>
        </div>
        <div id="SignUp-right">
          <img
            src="https://images.unsplash.com/photo-1598519102179-6547728a67b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D"
            alt="village community"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
