import { Link } from "react-router-dom";
import "./Navbar.css";
import assets from "../../assests";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import React, { useContext, useState } from "react";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="profile-image">
        <img src={assets.profile} alt="Logo" />
      </div>
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Education</Link>
        <Link to="/contact">Experience</Link>
        <Link to="/contact">Project</Link>
        <Link to="/contact">Resume</Link>
      </div>
      <label className="theme-toggle-button">
        <input
          type="checkbox"
          className="toggle-checkbox"
          onChange={toggleTheme}
        />
        <span className="toggle-slider"></span>
      </label>
    </nav>
  );
};

export default Navbar;
