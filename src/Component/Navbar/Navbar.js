import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button.js";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="navbar-logo-container">
            <img src="./assets/images/momiji-full-logo.png" alt="" />
          </div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/location" className="nav-links" onClick={closeMobileMenu}>
              Location <i className="fas fa-caret-down arrow" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
            Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/order-now" className="nav-links-mobile" onClick={closeMobileMenu}>
              Order Now !!!
            </Link>
          </li>
        </ul>
        <Button label="Order Now" link="https://momiji-west-linn.hrpos.heartland.us/menu" />
      </nav>
    </>
  );
}

export default Navbar;
