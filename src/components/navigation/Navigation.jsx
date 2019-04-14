import React from "react";
import { Link } from "gatsby";
import Logo from "../../assets/images/p2pu-logo.png";


const Navigation = (props) => {
  // const menuItems = props.menuItems ? props.menuItems : []
  return (
    <nav className="nav nav-collapsed navbar justify-content-between">

      <div className="nav-items">
        <Link className="menu nav-item text-dark" to={"/"}>Home</Link>
        <Link className="menu nav-item text-dark" to={"/about"}>About</Link>
      </div>
      <div className="navbar-brand">
        <Link to="/">
          <img src={ Logo } alt="P2PU logo" />
        </Link>
      </div>
  </nav>
  );
}

export default Navigation;
