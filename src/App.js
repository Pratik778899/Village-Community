import React, { useState } from "react";
import Layout from "./Layout";
import LandingPage from "./Components/LandingPage/LandingPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Weather from "./Components/Weather/Weather";
import News from "./Components/News/News";
import LoginC from "./Pages/LoginC";
import SignUpC from "./Pages/SignUpC";
import ProfileC from "./Pages/ProfileC";
import Cart from "./Components/Cart/Cart";
import BusinessItem from "./Components/Business/BusinessItem";
import WorkerItem from "./Components/Worker/WorkerItem";

const App = () => {
  const [LoginStatus, setLoginStatus] = useState(false);

   const handleLogin = () => {
     setLoginStatus(true);
   };

   const handelLogout = ()=>{
    setLoginStatus(false)
   }

  const existingUser = JSON.parse(localStorage.getItem("Loggedin")) || {};

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/News" element={<News />} />
          <Route path="/Weather" element={<Weather />} />
          <Route
            path="/Business"
            element={
              existingUser.type === "villager" ? (
                existingUser ? (
                  <WorkerItem />
                ) : (
                  <Navigate to="/Login" />
                )
              ) : existingUser ? (
                <BusinessItem />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
          <Route
            path="/Login"
            element={
              <LoginC
                setLoginStatus={setLoginStatus}
                handleLogin={handleLogin}
              />
            }
          />
          <Route path="/SignUp" element={<SignUpC />} />
          <Route
            path="/Profile"
            element={
              existingUser ? (
                <ProfileC
                  setLoginStatus={setLoginStatus}
                  handelLogout={handelLogout}
                />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
          <Route
            path="/Cart"
            element={existingUser ? <Cart /> : <Navigate to="/Login" />}
          />
          <Route exact path="/Worker" element={<WorkerItem />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
