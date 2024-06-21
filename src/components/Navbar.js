import React from "react";
import { PiFilmReelBold } from "react-icons/pi";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/" className="home-link">
      <nav className="navbar">
        <div className="navbar-brand">
          <PiFilmReelBold />
          <span className="company-name">E-cube</span>
        </div>
      </nav>
    </Link>
  );
};

export default Navbar;
