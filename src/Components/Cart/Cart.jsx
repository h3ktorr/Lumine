import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { IoClose } from "react-icons/io5";
import CartItems from '../CartItems/CartItems';
import "./Cart.css";


const Cart = () => {
  const {isCartOpen, closeCart} = useContext(ShopContext)
  return (
    <div className={isCartOpen ? "cart show" : "cart"}>
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <IoClose />
        </div>
        <div className="cart-items">
          <CartItems />
        </div>
        <div className="cart-summary"></div>
        <div className="cart-recommended"></div>
        <div className="cart-icons"></div>
        <div className="cart-fixedcheckout"></div>
      </div>
    </div>
  );
}

export default Cart