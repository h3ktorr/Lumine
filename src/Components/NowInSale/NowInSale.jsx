import React from 'react';
import './NowInSale.css';
import Item from '../Item/Item';
import nowinsale from '../Assets/nowinsale';

const NowInSale = () => { 
  return (
    <div className="nowinsale">
      <h1>Now in Sale</h1>
      <div className="nowinsale-items">
        {nowinsale.map((item) => {
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
    </div>
  );
}

export default NowInSale