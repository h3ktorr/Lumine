import React from 'react';
import './MensFootwear.css';
import Item from '../Item/Item';
import mensFootwear from '../Assets/mens_footwear.js'


const MensFootwear = ({amount}) => {
  let footwear = mensFootwear.slice(0, amount);
  if (amount > 10) {
    footwear = mensFootwear;
  }
  return (
    <div className="mensfootwear">
      <h1>Mens Footwear</h1>
      <div className="mensfootwear-items">
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
      <button>View more</button>
    </div>
  );
}

export default MensFootwear