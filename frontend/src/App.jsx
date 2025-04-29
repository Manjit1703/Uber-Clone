import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import Captainlogin from "./pages/Captainlogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogOut from "./pages/UserLogOut";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />  
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/Home" element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }/>
        <Route path="/users/logout" element={
          <UserProtectWrapper>
            <UserLogOut/>
          </UserProtectWrapper>
        } />
      </Routes>
    </div>
  );
};

export default App;
