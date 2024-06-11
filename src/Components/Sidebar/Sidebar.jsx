import React, { useRef, useContext, useEffect } from "react";
import "./Sidebar.css";
import { IoClose } from "react-icons/io5";
import logo from "../Assets/logo.png";
import Sidebar_search from "../Sidebar_search/Sidebar_search";
import Sidebar_links from "../Sidebar_links/Sidebar_links";
import { ShopContext } from "../../Context/ShopContext";


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(ShopContext);

  const sidebarRef = useRef(null);

  const handleSidebarClose = (e) => {
    if (e.target === sidebarRef.current) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
  
  return (
    <div
      className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      ref={sidebarRef}
      onClick={handleSidebarClose}
    >
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
