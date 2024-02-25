import React, { createContext, useState } from "react";
import mens_accessories from "../Components/Assets/mens_accessories";
import mens_bottom from "../Components/Assets/mens_bottom";
import mens_tops from "../Components/Assets/mens_top";
import mens_outerwear from "../Components/Assets/mens_outerwear";
import mens_footwear from "../Components/Assets/mens_footwear";
import womens_accessories from "../Components/Assets/womens_accessories";
import womens_bottom from "../Components/Assets/womens_bottom";
import womens_dress from "../Components/Assets/womens_dress";
import womens_footwear from "../Components/Assets/womens_footwears";
import womens_top from "../Components/Assets/womens_top";
import womens_outerwear from "../Components/Assets/womens_outerwear";

export const ShopContext = createContext(null);

const allProducts = [
  ...mens_accessories,
  ...mens_bottom,
  ...mens_tops,
  ...mens_outerwear,
  ...mens_footwear,
  ...womens_accessories,
  ...womens_bottom,
  ...womens_dress,
  ...womens_footwear,
  ...womens_top,
  ...womens_outerwear,
];

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {allProducts, cartItems, addToCart, removeFromCart}
  
  return (
    <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;