import React from 'react';
import './MensBottom.css';
import mensBottom from '../Assets/mens_bottom.js';
import Item from '../Item/Item';


const MensBottom = () => {
  let bottom = mensBottom.slice(0, 6);
  return (
    <div className="mensbottom">
      <h1>Mens Bottom</h1>
      <div className="mensbottom-items">
        {bottom.map((item) => {
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

export default MensBottom