import React, { useState, useContext } from 'react';
import './Sidebar_links.css'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Sidebar_links = () => {
 const { sidebarLinks, handleCategory, closeSidebar } = useContext(ShopContext);
  return (
    <div className="sidebar-links">
      <Link>
        <h2>All Categories</h2>
      </Link>
      <div className="sidebar-category">
        {sidebarLinks.map((item) => {
          return (
            <div className="sidebar-subcategory" key={item.id}>
              <div className="category-title">
                <Link to={item.address}>
                  <h2 onClick={closeSidebar}>{item.name}</h2>
                </Link>
                <div
                  className="category-toggle"
                  onClick={() => handleCategory(item.id)}
                >
                  {item.categoryState ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {item.categoryState && (
                <div className="category-body">
                  {item.links.map((data) => {
                    return (
                      <p onClick={closeSidebar} key={data.link_address}>
                        <Link to={data.link_address}>{data.link_name}</Link>
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar_links