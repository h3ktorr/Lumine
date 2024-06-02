import React from 'react';
import './NowInSale.css';
import Item from '../Item/Item';
import bestsellers from '../Assets/bestsellers';

const NowInSale = () => { 
  return (
    <div className="nowinsale">
      <h1>Now in Sale</h1>
      <div className="nowinsale-items">
        {bestsellers.map((item) => {
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

export default NowInSale