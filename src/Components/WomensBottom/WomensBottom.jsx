import React from 'react';
import './WomensBottom.css';
import Item from '../Item/Item';
import womensBottom from '../Assets/womens_bottom'

const WomensBottom = () => {
  let bottom = womensBottom.slice(0, 6);
  return (
    <div className="womensbottom">
      <h1>Womens Bottom</h1>
      <div className="womensbottom-items">
        {bottom.map((item) => {
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

export default WomensBottom