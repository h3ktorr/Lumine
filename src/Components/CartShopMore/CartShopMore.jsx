import React from 'react';
import './CartShopMore.css';
import { Link } from "react-router-dom"; 

const CartShopMore = (props) => {
  return (
    <div className="cartshopmore">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt="cartshopmore-image"
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

export default CartShopMore