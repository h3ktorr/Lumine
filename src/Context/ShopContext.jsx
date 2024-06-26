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
import sidebar_data from '../Components/Assets/sidebar_data';

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
const getDefaultSizes = () => {
  let sizes = {};
  for (let index = 0; index < allProducts.length + 1; index++) {
    sizes[index] = '';
  }
  return sizes;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultCart());
  const [cartSizes, setCartSizes] = useState(getDefaultSizes())
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAllCollectionsOpen, setIsAllCollectionsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarLinks, setSidebarLinks] = useState(sidebar_data);

  const openAllCollections = () => {
    setIsAllCollectionsOpen(true);
  }
  const closeAllCollections = () => {
    setIsAllCollectionsOpen(false);
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  };

  const handleCategory = (value) => {
    for (let i = 0; i < sidebarLinks.length; i++) {
      if (sidebarLinks[i].id === value) {
        setSidebarLinks([...sidebarLinks], sidebarLinks[i].categoryState = !sidebarLinks[i].categoryState);
      }
    }
  }

  const chooseSize = (itemId, itemSize) => {
    setCartSizes((prev) => ({...prev, [itemId]: itemSize}));
  }

  const openCart = () => {
    setIsCartOpen(true);
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
  };

  
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const deleteCartItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] * 0 }));
  };
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
    getTotalCartItems,
    getTotalCartAmount,
    deleteCartItem,
    cartSizes,
    chooseSize,
    sidebarLinks,
    handleCategory,
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isAllCollectionsOpen,
    closeAllCollections,
    openAllCollections,
  };
  
  return (
    <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;