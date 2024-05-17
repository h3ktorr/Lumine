import React from 'react';
import { Link } from "react-router-dom";
import './WomensTop.css';
import Item from '../Item/Item';
import womensTop from '../Assets/womens_top.js'

const WomensTop = ({amount}) => {
  let top = womensTop.slice(0, amount);
  if (amount > 10) {
    top = womensTop;
  }
  return (
    <div className="womenstop">
      <h1>Womens Top</h1>
      <div className="womenstop-items">
        {top.map((item) => {
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
        <Link to="top">View more</Link>
      </button>
    </div>
  );
}

export default WomensTop