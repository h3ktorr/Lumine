import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-shop">
        <h1 className="footer-heading">Shop</h1>
        <ul className="shop-content">
          <li>OuterWears</li>
          <li>Tops</li>
          <li>Bottom</li>
          <li>Footwears</li> 
          <li>Accessories</li>
        </ul>
      </div>
      <div className="follow-us">
        <h1 className="footer-heading">Follow Us At</h1>
        <div className="socials">
          <FaXTwitter className="footer-icon"/>
          <FaFacebook className="footer-icon"/>
          <FaInstagram className="footer-icon"/>
          <FaTiktok className="footer-icon"/>
        </div>
      </div>
      <div className="about-us">
        <h1 className="footer-heading">Lumine</h1>
        <ul className="about-content">
          <li>About Us</li>
          <li>Become a Retailer</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Terms & Condition</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
