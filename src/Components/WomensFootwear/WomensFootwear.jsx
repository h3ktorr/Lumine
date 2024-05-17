import React from 'react';
import { Link } from "react-router-dom";
import './WomensFootwear.css';
import Item from '../Item/Item';
import womensFootwear from '../Assets/womens_footwears.js'

const WomensFootwear = ({amount}) => {
  let footwear = womensFootwear.slice(3, amount);
  if (amount > 10) {
    footwear = womensFootwear;
  }
  return (
    <div className="womensfootwear">
      <h1>Womens Footwear</h1>
      <div className="womensfootwear-items">
        {footwear.map((item) => {
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
        <Link to="footwear">View more</Link>
      </button>
    </div>
  );
}

export default WomensFootwear