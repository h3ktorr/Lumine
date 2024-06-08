import React from 'react';
import { FaPaypal, FaCcVisa } from "react-icons/fa6";
import './CartIcons.css'

const CartIcons = () => {
  return (
    <div className="cart-icons">
      <FaCcVisa />
      <FaPaypal />
    </div>
  );
}

export default CartIcons