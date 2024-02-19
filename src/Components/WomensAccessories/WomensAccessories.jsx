import React from 'react';
import "./WomensAccessories.css";
import Item from '../Item/Item';
import womensAccessories from '../Assets/womens_accessories'

const WomensAccessories = () => {
  let accessories = womensAccessories.slice(0, 6);
  return (
    <div className="womensaccessories">
      <h1>Womens Accessories</h1>
      <div className="womensaccessories-items">
        {accessories.map((item) => {
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

export default WomensAccessories