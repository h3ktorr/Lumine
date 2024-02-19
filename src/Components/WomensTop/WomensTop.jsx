import React from 'react';
import './WomensTop.css';
import Item from '../Item/Item';
import womensTop from '../Assets/womens_top'

const WomensTop = () => {
  let top = womensTop.slice(0, 6);
  return (
    <div className="womenstop">
      <h1>Womens Top</h1>
      <div className="womenstop-items">
        {top.map((item) => {
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

export default WomensTop