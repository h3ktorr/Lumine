import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'; 

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt="item-image" 
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <p>{props.name}</p>
      <p>
        <strong>${props.price}</strong>
      </p>
    </div>
  );
}

export default Item