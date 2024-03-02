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
          <IoClose className='closecart-btn' onClick={closeCart}/>
        </div>
        <div className="cart-items">
          <CartItems />
        </div>
        <div className="cart-summary">
          <p className="summaryheading">Order Summary</p>
          <div className="summaryinfo">
            <div className="summary-subtotal">
              <p>Subtotal</p>
              <p>$7000</p>
            </div>
            <div className="summary-shipping">
              <p>Shipping</p>
              <p>Free Shipping</p>
            </div>
            <div className="summary-total">
              <p>Total</p>
              <p>$10000</p>
            </div>
          </div>
          <button>Checkout</button>
        </div>
        <div className="cart-recommended"></div>
        <div className="cart-icons"></div>
        <div className="cart-fixedcheckout"></div>
      </div>
    </div>
  );
}

export default Cart