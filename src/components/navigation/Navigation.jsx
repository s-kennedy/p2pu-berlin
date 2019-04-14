import React from "react";
// import { Link } from "gatsby";
import Logo from "../../assets/images/p2pu-logo.png";


const Navigation = (props) => {
  // const menuItems = props.menuItems ? props.menuItems : []
  return (
    <nav className="nav nav-collapsed navbar justify-content-between">

      <div className="nav-items">
        <a className="menu nav-item text-dark" href={"/"}>Home</a>
        <a className="menu nav-item text-dark" href={"/about"}>About</a>
      </div>
      <div className="navbar-brand">
        <a href="/">
          <img src={ Logo } alt="P2PU logo" />
        </a>
      </div>
  </nav>
  );
}

export default Navigation;
