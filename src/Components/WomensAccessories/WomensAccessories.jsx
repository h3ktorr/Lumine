import React from 'react';
import { Link } from "react-router-dom";
import "./WomensAccessories.css";
import Item from '../Item/Item';
import womensAccessories from '../Assets/womens_accessories.js'

const WomensAccessories = ({amount}) => {
  let accessories = womensAccessories.slice(0, amount);
  if (amount > 10) {
    accessories = womensAccessories;
  }
  return (
    <div className="womensaccessories">
      <h1>Womens Accessories</h1>
      <div className="womensaccessories-items">
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
      <button>
        <Link to="accessories">View more</Link>
      </button>
    </div>
  );
}

export default WomensAccessories