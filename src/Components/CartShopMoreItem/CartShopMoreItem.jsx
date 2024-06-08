import React, { useContext } from 'react';
import './CartShopMoreItem.css';
import { Link } from "react-router-dom"; 
import { ShopContext } from '../../Context/ShopContext';

const CartShopMoreItem = (props) => {
  const { closeCart } = useContext(ShopContext);
  const handleClick = () => {
    window.scrollTo(0, 0);
    closeCart();
  }; 
  return (
    <div className="cartshopmore-item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="cartshopmore-item-image" onClick={handleClick} />
      </Link>
      <p>{props.name}</p>
      <p>
        <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default CartShopMoreItem