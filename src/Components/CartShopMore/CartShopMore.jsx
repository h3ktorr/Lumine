import React, { useContext } from "react";
import "./CartShopMore.css";
import { ShopContext } from "../../Context/ShopContext";
import CartShopMoreItem from "../CartShopMoreItem/CartShopMoreItem";


const CartShopMore = () => {
 const { allProducts } = useContext(ShopContext);
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
    <div className="cart-shopmore">
      <h1>Shop More</h1>
      <div className="cart-shopmore-items">
        {randomRecommends().map((item) => {
          return (
            <CartShopMoreItem
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
  );
}
 
export default CartShopMore