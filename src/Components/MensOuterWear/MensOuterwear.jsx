import React from 'react';
import './MensOuterwear.css';
import Item from '../Item/Item';
import mensOuterwear from '../Assets/mens_outerwear';

const MensOuterwear = () => {
  let outerwear = mensOuterwear.slice(0, 6);
  return (
    <div className="mensouterwear">
      <h1>Mens OuterWear</h1>
      <div className="mensaccessories-items">
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
      <button>View more</button>
    </div>
  );
}

export default MensOuterwear