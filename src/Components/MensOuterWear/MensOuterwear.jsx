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

export default MensOuterwear