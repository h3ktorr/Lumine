import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { IoClose } from "react-icons/io5";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";
import CartSummary from "../CartSummary/CartSummary";
import CartFixedCheckout from "../CartFixedCheckout/CartFixedCheckout";
import CartShopMore from "../CartShopMore/CartShopMore";
import CartIcons from "../CartIcons/CartIcons";

const Cart = () => {
  const { isCartOpen, closeCart } = useContext(ShopContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const cartContainer = document.querySelector(".cart-container");
      if (isCartOpen && !cartContainer.contains(event.target)) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      // document.addEventListener("click", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      // document.removeEventListener("click", handleClickOutside);
    }

    // return () => {
    //   document.removeEventListener("click", handleClickOutside);
    // };
  }, [isCartOpen]);

  return (
    <div className={isCartOpen ? "cart show" : "cart"}>
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <IoClose className="closecart-btn" onClick={closeCart} />
        </div>
        <CartItems />
        <CartSummary />
        <CartShopMore />
        <CartIcons />
      </div>
      {/* <CartFixedCheckout /> */}
    </div>
  );
};

export default Cart;
