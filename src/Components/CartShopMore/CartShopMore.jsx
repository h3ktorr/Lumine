import React, { useContext } from 'react';
import './CartShopMore.css';
import { Link } from "react-router-dom"; 
import { ShopContext } from '../../Context/ShopContext';

const CartShopMore = (props) => {
  const {closeCart} = useContext(ShopContext);
  const handleClick = () => {
    window.scrollTo(0, 0);
    closeCart();
  }
  return (
    <div className="cartshopmore">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt="cartshopmore-image"
          onClick={handleClick}
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