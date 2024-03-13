import React from 'react';
import "./MensAccessories.css";
import mensAccessories from '../Assets/mens_accessories';
import Item from '../Item/Item';

const MensAccessories = () => {
  let accessories = mensAccessories.slice(0, 6);
  return (
    <div className="mensaccessories">
      <h1>Mens Accessories</h1>
      <div className="mensaccessories-items">
        {accessories.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image[0]}
              price={item.price}
            />
          );
        })}
      </div>
      <button>View more</button>
    </div>
  );
}

export default MensAccessories