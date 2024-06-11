import React, { useContext } from "react";
import "./ExploreWomenButton.css";
import { ShopContext } from "../../Context/ShopContext";

const ExploreWomenButton = () => {
  const { openAllCollections } = useContext(ShopContext);

  return (
    <div className="explorewomenbutton">
      <button onClick={openAllCollections}>Explore All Women</button>
    </div>
  );
};

export default ExploreWomenButton;
