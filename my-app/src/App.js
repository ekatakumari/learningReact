import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Project from "./pages/Project/Project";
import AboutUs from "./pages/AboutUs/AboutUs";
import FaqComponent from "./component/FaqComponent/FaqComponent";
import { TwoFactorVerification } from "./component/TwoFactorVerification/TwoFactorVerification";
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
  );
}

export default App;
