import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './CartFixedCheckout.css'

const CartFixedCheckout = () => {
 const { getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="cart-fixedcheckout">
      <div className="fixedleft">
        <p className="fixedleft-header">My Cart({getTotalCartItems()})</p>
        <p className="fixedleft-price">${getTotalCartAmount()}</p>
      </div>
      <div className="fixedright">
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartFixedCheckout