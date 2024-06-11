import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./ShopAllMen.css";
import { IoClose } from "react-icons/io5";

const ShopAllMen = () => {
  const { sidebarLinks, isAllCollectionsOpen, closeAllCollections } =
    useContext(ShopContext);

  const collectionRef = useRef(null);

  const mensdata = sidebarLinks.filter((item) => item.name === "Men");

  const handleCollectionClose = (e) => {
    if (e.target === collectionRef.current) {
      closeAllCollections();
    }
  };

  return (
    <div
      className={
        isAllCollectionsOpen ? "shopallmen display" : "shopallmen"
      }
      ref={collectionRef}
      onClick={handleCollectionClose}
    >
      <div className="shopallmen-container">
        <div className="mencollection-header">
          <h2>Shop Men</h2>
          <IoClose
            className="closecollection-btn"
            onClick={closeAllCollections}
          />
        </div>
        {mensdata.map((item) => {
          const { name, id, links } = item;

          return (
            <div className="mencategory" key={id}>
              {links.map((sub) => {
                const { link_name, link_address } = sub;
                const sub_address = link_address.slice(1);

                return (
                  <p key={link_address} onClick={closeAllCollections}>
                    <Link to={sub_address}>
                      {name}'s {link_name}
                    </Link>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopAllMen;
