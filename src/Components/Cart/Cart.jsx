import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { IoClose } from "react-icons/io5";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";
import Recommended from "../Recommended/Recommended";
import CartShopMore from "../CartShopMore/CartShopMore";

const Cart = () => {
  const { isCartOpen, closeCart, allProducts, cartItems } =
    useContext(ShopContext);

  if (isCartOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  let random = Math.floor(Math.random() * 420) + 1;
  let product = allProducts[random];
  const recommendedItems = allProducts.filter(
    (item) => item.category.toLowerCase() === product.category.toLowerCase()
  );
  function randomRecommends() {
    let recommends = recommendedItems.slice();
    const randomElements = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * recommends.length);
      randomElements.push(recommends.splice(randomIndex, 1)[0]);
    }
    return randomElements;
  }

  return (
    <div className={isCartOpen ? "cart show" : "cart"}>
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <IoClose className="closecart-btn" onClick={closeCart} />
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
        <div className="cart-shopmore">
          <h1>Shop More</h1>
          <div className="cart-shopmore-items">
            {randomRecommends().map((item) => {
              return (
                <CartShopMore
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image[1]}
                  price={item.price}
                />
              );
            })}
          </div>
          <button>View more</button>
        </div>
        <div className="cart-icons"></div>
      </div>
      <div className="cart-fixedcheckout">
        <div className="fixedleft">
          <p className="fixedleft-header">My Cart(3)</p>
          <p className="fixedleft-price">$7000</p>
        </div>
        <div className="fixedright">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
