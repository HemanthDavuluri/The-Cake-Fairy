import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

function Header({ dropdown, dropdownset }) {
  function setdropDown() {
    if (dropdown === true) {
      dropdownset(false);
    }
  }
  return (
    <div className="header" onClick={setdropDown}>
      <img src={logo} alt="logo" />
      <div className="header-options">
        <h2>Home</h2>
        <h2>About Us</h2>
        <div>
          <h2 onClick={() => dropdownset(dropdown === false ? true : false)}>
            Menu
          </h2>
          {dropdown ? (
            <div className="menu-drop-down">
              <Link
                to="chocolate-section"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={setdropDown}
              >
                Chocolate Cakes
              </Link>
              <Link
                to="fruit-section"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={setdropDown}
              >
                Fruit Cakes
              </Link>
              <Link
                to="desert-section"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={setdropDown}
              >
                Desert Cakes
              </Link>
              <Link
                to="special-cake-section"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={setdropDown}
              >
                Special Cakes
              </Link>
              <Link
                to="special-combos-section"
                spy={true}
                smooth={true}
                onClick={setdropDown}
                duration={1000}
              >
                Special Combos
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <h2>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            onClick={setdropDown}
            duration={3000}
          >
            Contact
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Header;
