import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = useState("Shop");
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li
            onClick={() => {
              setmenu("Shop");
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Shop
            </Link>
            {menu === "Shop" ? <hr className="link-hr" /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("Mens");
            }}
          >
            <Link to="/Mens" style={{ textDecoration: "none" }}>
              Men
            </Link>
            {menu === "Mens" ? <hr className="link-hr" /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("Women");
            }}
          >
            <Link to="/Women" style={{ textDecoration: "none" }}>
              Women
            </Link>
            {menu === "Women" ? <hr className="link-hr" /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("Kids");
            }}
          >
            <Link to="/Kids" style={{ textDecoration: "none" }}>
              Kids
            </Link>
            {menu === "Kids" ? <hr className="link-hr" /> : <></>}
          </li>
        </ul>
        <div className="cart-login">
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/Cart">
            <img src={cart_icon} alt="" className="cart-img" />{" "}
          </Link>
          <div className="cart-count">0</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
