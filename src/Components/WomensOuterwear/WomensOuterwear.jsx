import React from 'react';
import { Link } from "react-router-dom";
import './WomensOuterwear.css';
import Item from '../Item/Item';
import womensOuterwear from '../Assets/womens_outerwear.js'

const WomensOuterwear = ({amount}) => {
  let outerwear = womensOuterwear.slice(0, amount);
  if (amount > 10) {
    outerwear = womensOuterwear;
  }
  return (
    <div className="womensouterwear">
      <h1>Womens OuterWear</h1>
      <div className="womensouterwear-items">
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

export default WomensOuterwear