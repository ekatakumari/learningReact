import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Project from "./pages/Project/Project";
import AboutUs from "./pages/AboutUs/AboutUs";
import FaqComponent from "./component/FaqComponent/FaqComponent";
import { TwoFactorVerification } from "./component/TwoFactorVerification/TwoFactorVerification";
<<<<<<< HEAD
import { ThemeProvider } from "./component/ThemeContext/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/faq" element={<FaqComponent />} />
          <Route path="/otp" element={<TwoFactorVerification />} />
        </Routes>
      </div>
    </ThemeProvider>
=======
import { JobBoard } from "./component/JobBoard/JobBoard";
import AutoComplete from "./component/AutoComplete/AutoComplete";
import Pagignation from "./component/Pagignation/Pagignation";
import FileFolder from "./component/FileFolder/FileFolder";
import ImageSlider from "./component/ImageSlider/ImageSlider"
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
        <Route path="/pagignation" element={<Pagignation/>}/>
        <Route path="/filefolder" element={<FileFolder/>}/>
        <Route path="/imageSlider" element={<ImageSlider/>}/>
      </Routes>
    </div>
>>>>>>> ea3995bc6ada01a5d6daa6a26092a69a3483284e
  );
}

export default App;
