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
              setmenu("men");
            }}
          >
            <Link to="/men" style={{ textDecoration: "none" }}>
              Men
            </Link>
            {menu === "men" ? <hr className="link-hr" /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("women");
            }}
          >
            <Link to="/women" style={{ textDecoration: "none" }}>
              Women
            </Link>
            {menu === "women" ? <hr className="link-hr" /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("kid");
            }}
          >
            <Link to="/kid" style={{ textDecoration: "none" }}>
              Kids
            </Link>
            {menu === "kid" ? <hr className="link-hr" /> : <></>}
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
