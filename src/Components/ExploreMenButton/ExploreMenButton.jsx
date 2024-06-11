import React, { useContext } from 'react';
import "./ExploreMenButton.css";
import { ShopContext } from "../../Context/ShopContext";

const ExploreMenButton = () => {
  const { openAllCollections } = useContext(ShopContext);

  return (
    <div className="exploremenbutton">
      <button onClick={openAllCollections}>Explore All Men</button>
    </div>
  );
} 

export default ExploreMenButton