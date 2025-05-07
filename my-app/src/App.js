import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Project from "./pages/Project/Project";
import AboutUs from "./pages/AboutUs/AboutUs";
import FaqComponent from "./component/FaqComponent/FaqComponent";
import { TwoFactorVerification } from "./component/TwoFactorVerification/TwoFactorVerification";
import { JobBoard } from "./component/JobBoard/JobBoard";
import AutoComplete from "./component/AutoComplete/AutoComplete";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/faq" element={<FaqComponent/>}/>
        <Route path="/otp" element={<TwoFactorVerification/>}/>
        <Route path="/job-board" element={<JobBoard/>} />
        <Route path="/autocomplete" element={<AutoComplete/>}/>
      </Routes>
    </div>
  );
}

export default App;
