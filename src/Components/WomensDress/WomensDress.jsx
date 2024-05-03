import React from 'react';
import './WomensDress.css';
import Item from '../Item/Item';
import womensDress from '../Assets/womens_dress.js';

const WomensDress = ({amount}) => {
  let dress = womensDress.slice(0, amount);
  if (amount > 10) {
    dress = womensDress;
  }
  return (
    <div className="womensdress">
      <h1>Womens Dress</h1>
      <div className="womensdress-items">
        {dress.map((item) => {
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
      <button>View more</button>
    </div>
  );
}

export default WomensDress