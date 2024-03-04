import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";

const CartItems = () => {
  const {
    allProducts,
    cartItems,
    removeFromCart,
    addToCart,
  } = useContext(ShopContext);
  return (
    <div className="cartitems">
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-img">
                <img src={e.image[1]} alt="" />
              </div>
              <div className="cartitem-info">
                <p className="cartitem-name">{e.name}</p>
                <p className="cartitem-size">M</p>
                <div className="cartitem-quantity">
                  <FaMinus onClick={() => removeFromCart(e.id)} />
                  <p>{cartItems[e.id]}</p>
                  <FaPlus onClick={() => addToCart(e.id)} />
                </div>
              </div>
              <div className="cartitems-right">
                <p className="cartitem-price">${e.price * cartItems[e.id]}</p>
                <FaRegTrashCan onClick={() => removeFromCart(e.id)} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
