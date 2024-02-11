import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo" onClick={() => setMenu("shop")}>
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/mens">
            Men
          </Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/womens">
            Women
          </Link>
          {menu === "women" && <hr />}
        </li>
      </ul>
      <div className="nav-icons">
        <IoSearch className="icon" />
        <Link style={{ textDecoration: "none" }} to="./login">
          <IoPersonOutline className="icon" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="./cart">
          <PiShoppingCartSimpleFill className="icon" />
        </Link>
        <div className="nav-cart-count">16</div>
      </div>
    </div>
  );
};

export default Navbar;
