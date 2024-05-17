import React from 'react';
import { Link } from "react-router-dom";
import './WomensBottom.css';
import Item from '../Item/Item';
import womensBottom from '../Assets/womens_bottom.js'

const WomensBottom = ({amount}) => {
  let bottom = womensBottom.slice(0, amount);
  if (amount > 10) {
    bottom = womensBottom;
  }
  return (
    <div className="womensbottom">
      <h1>Womens Bottom</h1>
      <div className="womensbottom-items">
        {bottom.map((item) => {
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
        <Link to="bottom">View more</Link>
      </button>
    </div>
  );
}

export default WomensBottom