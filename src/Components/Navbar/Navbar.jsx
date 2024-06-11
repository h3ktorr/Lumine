import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { openCart, getTotalCartItems, openSidebar } = useContext(ShopContext);
  let cartIconAmount = getTotalCartItems();
  if(cartIconAmount === 0){
    cartIconAmount = ''
  }
  return (
    <div className="navbar">
      <div className="nav-btn small-screen" onClick={openSidebar}>
        <FaBars />
      </div>
      <div className="nav-logo" onClick={() => setMenu("shop")}>
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <ul className="nav-menu big-screen">
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
        <IoSearch className="icon big-screen" />
        {/* <Link
          style={{ textDecoration: "none" }}
          to="./login"
          className="big-screen"
        >
          <IoPersonOutline className="icon" />
        </Link> */}
        <PiShoppingCartSimpleFill className="icon" onClick={() => openCart()} />
        <div className="nav-cart-count">{cartIconAmount}</div>
      </div>
    </div>
  );
};

export default Navbar;
