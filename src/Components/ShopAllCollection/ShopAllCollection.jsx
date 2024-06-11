import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./ShopAllCollection.css";
import { IoClose } from "react-icons/io5";

const ShopAllCollection = () => {
  const { sidebarLinks, isAllCollectionsOpen, closeAllCollections } =
    useContext(ShopContext);

  const collectionRef = useRef(null);

  const handleCollectionClose = (e) => {
    if (e.target === collectionRef.current) {
      closeAllCollections();
    }
  };

  return (
    <div
      className={
        isAllCollectionsOpen ? "shopallcollection display" : "shopallcollection"
      }
      ref={collectionRef}
      onClick={handleCollectionClose}
    >
      <div className="shopallcollection-container">
        <div className="collection-header">
          <h2>Shop All Collections</h2>
          <IoClose
            className="closecollection-btn"
            onClick={closeAllCollections}
          />
        </div>
        <div className="collection-categories">
          {sidebarLinks.map((item) => {
            const { name, id, links, address } = item;
            return (
              <div className="collection-category" key={id}>
                <h3 onClick={closeAllCollections}>
                  <Link to={address}>{name}'s Clothes</Link>
                </h3>
                <div className="collection-subcategories">
                  {links.map((sub) => {
                    const { link_name, link_address } = sub;
                    return (
                      <p key={link_address} onClick={closeAllCollections}>
                        <Link to={link_address}>
                          {name}'s {link_name}
                        </Link>
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopAllCollection;
