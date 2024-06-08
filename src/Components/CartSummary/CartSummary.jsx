import React, { useContext } from "react";
import './CartSummary.css'
import { ShopContext } from "../../Context/ShopContext";

const CartSummary = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-summary">
      <p className="summaryheading">Order Summary</p>
      <div className="summaryinfo">
        <div className="summary-subtotal">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <div className="summary-shipping">
          <p>Shipping</p>
          <p>Free Shipping</p>
        </div>
        <div className="summary-total">
          <p>Total</p>
          <p>${getTotalCartAmount()}</p>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartSummary;
