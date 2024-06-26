import React from 'react';
import { Link } from "react-router-dom";
import "./MensAccessories.css";
import mensAccessories from '../Assets/mens_accessories.js';
import Item from '../Item/Item';
 
const MensAccessories = ({amount}) => {
  let accessories = mensAccessories.slice(0, amount);
  if (amount > 10) {
    accessories = mensAccessories;
  }
  return (
    <div className="mensaccessories">
      <h1>Mens Accessories</h1>
      <div className="mensaccessories-items">
        {accessories.map((item) => {
          const images = [...item.image];
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={images}
              price={item.price}
            />
          );
        })}
      </div>
      {amount < 10 && <button>
        <Link to="accessories">View more</Link>
      </button>}
    </div>
  );
}

export default MensAccessories