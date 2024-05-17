import React from 'react';
import { Link } from "react-router-dom";
import './MensBottom.css';
import mensBottom from '../Assets/mens_bottom.js';
import Item from '../Item/Item';


const MensBottom = ({amount}) => {
  let bottom = mensBottom.slice(0, amount);
  if (amount > 10) {
    bottom = mensBottom;
  }
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
      <button>
        <Link to="bottom">View more</Link>
      </button>
    </div>
  );
}

export default MensBottom