import React from 'react';
import './WomensDress.css';
import Item from '../Item/Item';
import womensDress from '../Assets/womens_dress';

const WomensDress = () => {
  let dress = womensDress.slice(0, 6);
  return (
    <div className="womensdress">
      <h1>Womens Dress</h1>
      <div className="womensdress-items">
        {dress.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image[1]}
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