import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { IoClose } from "react-icons/io5";
import logo from "../Assets/logo.png";
import Sidebar_search from "../Sidebar_search/Sidebar_search";
import Sidebar_links from "../Sidebar_links/Sidebar_links";
import { ShopContext } from "../../Context/ShopContext";


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(ShopContext);
  
  return (
    <div className={`${isSidebarOpen? "sidebar show-sidebar": 'sidebar'}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <IoClose className="closecart-btn" onClick={closeSidebar} />
          <div className="sidebar-logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <Sidebar_search />
        <Sidebar_links />
      </div>
    </div>
  );
};

export default Sidebar;
