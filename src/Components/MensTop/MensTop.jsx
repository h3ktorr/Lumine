import React from 'react';
import { Link } from "react-router-dom";
import './MensTop.css';
import Item from '../Item/Item';
import menstop from '../Assets/mens_top';

const MensTop = ({amount}) => {
  let top = menstop.slice(0, amount);
  if(amount > 10){
    top = menstop;
  }
  return (
    <div className="menstop">
      <h1>Mens Top</h1>
      <div className="menstop-items">
        {top.map((item) => {
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
      {amount < 10 && (
        <button>
          <Link to="top">View more</Link>
        </button>
      )}
    </div>
  );
}

export default MensTop