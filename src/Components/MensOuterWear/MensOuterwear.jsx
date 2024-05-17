import React from 'react';
import { Link } from "react-router-dom";
import './MensOuterwear.css';
import Item from '../Item/Item';
import mensOuterwear from '../Assets/mens_outerwear';

const MensOuterwear = ({amount}) => {
  let outerwear = mensOuterwear.slice(0, amount);
  if (amount > 10) {
    outerwear = mensOuterwear;
  }
  return (
    <div className="mensouterwear">
      <h1>Mens OuterWear</h1>
      <div className="mensaccessories-items">
        {outerwear.map((item) => {
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
        <Link to="outerwear">View more</Link>
      </button>
    </div>
  );
}

export default MensOuterwear