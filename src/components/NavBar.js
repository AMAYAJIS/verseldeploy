import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const NavBar = () => {
  //state of hamburger menu
  const [click, SetClick] = useState(true);
  const handleClick = () => {
    SetClick(!click);
  };
  return (
    <div className="header">
      <Link to="/">
        <h1>Amayaji S</h1>
      </Link>
      <ul className={!click ? "navbar" : "navbar active"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
      <div className="hamgburger-menu" onClick={handleClick}>
        {click ? (
          <RxHamburgerMenu size={30} style={{ color: "#fff" }} />
        ) : (
          <RxCross2 size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
