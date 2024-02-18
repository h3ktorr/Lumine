import React from 'react';
import './MensFootwear.css';
import Item from '../Item/Item';
import mensFootwear from '../Assets/mens_footwear'


const MensFootwear = () => {
  let footwear = mensFootwear.slice(0, 6);
  return (
    <div className="mensfootwear">
      <h1>Mens Footwear</h1>
      <div className="mensfootwear-items">
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

export default MensFootwear