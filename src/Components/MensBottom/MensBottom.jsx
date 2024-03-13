import React from 'react';
import './MensBottom.css';
import mensBottom from '../Assets/mens_bottom';
import Item from '../Item/Item';


const MensBottom = () => {
  let bottom = mensBottom.slice(0, 6);
  return (
    <div className="mensbottom">
      <h1>Mens Bottom</h1>
      <div className="mensbottom-items">
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

export default MensBottom