import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props => {
  let loggedIn = JSON.parse(localStorage.getItem("Loggedin"));

  return (
    <>
      <div id="nav-main">
        <div id="nav-left">
          <Link to="/">
            <h2>Community</h2>
          </Link>
        </div>
        <div id="nav-mid">
          <Link to="/News">
            <h2>News</h2>
          </Link>
          <Link to="/Weather">
            <h2>Weather</h2>
          </Link>
          {loggedIn && loggedIn.type === "villager" ? (
            <Link to="/Worker">
              <h2>Worker</h2>
            </Link>
          ) : (
            <Link to="/Business">
              <h2>Business</h2>
            </Link>
          )}
        </div>
        <div id="nav-right">
          {loggedIn ? (
            <>
              <Link to="/Profile">
                <h2>Profile</h2>
              </Link>
              <Link to="/Cart">
                <h2>Cart</h2>
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login">
                <h2>Login</h2>
              </Link>
              <Link to="/SignUp">
                <h2>Sign Up</h2>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
