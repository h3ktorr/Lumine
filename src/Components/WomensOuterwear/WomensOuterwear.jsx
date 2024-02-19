import React from 'react';
import './WomensOuterwear.css';
import Item from '../Item/Item';
import womensOuterwear from '../Assets/womens_outerwear'

const WomensOuterwear = () => {
  let outerwear = womensOuterwear.slice(0, 6);
  return (
    <div className="womensouterwear">
      <h1>Womens OuterWear</h1>
      <div className="womensouterwear-items">
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

export default WomensOuterwear