import React, { useContext } from "react";
import "./CollectionButton.css";
import { ShopContext } from "../../Context/ShopContext";

const CollectionButton = () => {
  const { openAllCollections } = useContext(ShopContext);
  return (
    <div className="collectionbutton">
      <button onClick={openAllCollections}>Shop all Collection</button>
    </div>
  );
};

export default CollectionButton;
