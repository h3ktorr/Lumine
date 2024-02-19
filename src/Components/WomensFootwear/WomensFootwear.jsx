import React from 'react';
import './WomensFootwear.css';
import Item from '../Item/Item';
import womensFootwear from '../Assets/womens_footwears'

const WomensFootwear = () => {
  let footwear = womensFootwear.slice(4, 10);
  return (
    <div className="womensfootwear">
      <h1>Womens Footwear</h1>
      <div className="womensfootwear-items">
        {footwear.map((item) => {
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

export default WomensFootwear