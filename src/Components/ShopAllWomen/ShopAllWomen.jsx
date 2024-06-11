import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./ShopAllWomen.css";
import { IoClose } from "react-icons/io5";

const ShopAllWomen = () => {
 const { sidebarLinks, isAllCollectionsOpen, closeAllCollections } =
   useContext(ShopContext);

 const collectionRef = useRef(null);

 const womensdata = sidebarLinks.filter((item) => item.name === "Women");

 const handleCollectionClose = (e) => {
   if (e.target === collectionRef.current) {
     closeAllCollections();
   }
 };

  return (
    <div
      className={isAllCollectionsOpen ? "shopallwomen display" : "shopallwomen"}
      ref={collectionRef}
      onClick={handleCollectionClose}
    >
      <div className="shopallwomen-container">
        <div className="womencollection-header">
          <h2>Shop Women</h2>
          <IoClose
            className="closecollection-btn"
            onClick={closeAllCollections}
          />
        </div>
        {womensdata.map((item) => {
          const { name, id, links } = item;

          return (
            <div className="womencategory" key={id}>
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

export default ShopAllWomen;
