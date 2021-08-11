import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.left}>
        <a href="#home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={classes.right}>
        <ul className={classes.lists}>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#operation">Operations</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className={classes.openAccount}>
            <a href="#">Open Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
