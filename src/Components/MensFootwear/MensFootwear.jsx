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