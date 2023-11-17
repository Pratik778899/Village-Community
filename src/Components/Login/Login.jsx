import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import userData from "../../Database/UserData";

const Login = props => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");


  // const handleLogin = () => {
  //   props.setIsLoggedIn(true);
  //   navigate("/");
  // };

  const handelLogin = () => {
    let existingUser = JSON.parse(localStorage.getItem("userData")) || [];

    let user = existingUser.find(user => user.mail === mail);

    if (user) {
      if (user.password === pass) {
        const extUser = {
          mail: mail,
          password: pass,
          type: user.type,
        };
        alert("Login Successfull");

        localStorage.setItem("Loggedin", JSON.stringify(extUser));
        // props.setLoginStatus(true);
        props.handleLogin();
      } else {
        alert("Password Is Wrong");
      }
    } else {
      alert("User Not Found");
    }
  };

  return (
    <>
      <div id="login-main-container">
        <div id="login-left">
          <img
            src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ2lufGVufDB8fDB8fHww"
            alt="village community"
          />
        </div>
        <div id="login-right">
          <div id="login-container">
            <h2>Welcome To Village Community 👋</h2>
            <p>Please login to you account and start the adventure</p>
            <div id="login-form-main">
              <div id="login-form">
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
                <div id="RedirectLogin">
                  <p>Create Account</p>
                  <Link id="LoginRedirect" to="/SignUp">
                    SignUp
                  </Link>
                </div>
              </div>
            </div>
            <div id="login-btn">
              <button onClick={handelLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
