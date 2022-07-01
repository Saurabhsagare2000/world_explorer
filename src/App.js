import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";

import UserHome from "./components/UserHome"
const App = () => {
  return (

    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userregister" element={<UserRegister />} />

        <Route path="/userhome" element={<UserHome />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>

    </>

  )


}

export default App;