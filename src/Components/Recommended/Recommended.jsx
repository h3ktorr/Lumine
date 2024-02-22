import React, { useContext } from 'react';
import "./Recommended.css";
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const Recommended = (props) => {
 const {allProducts} = useContext(ShopContext)
 const {product} = props;
 const recommendedItems = allProducts.filter((item)=>item.category.toLowerCase()===product.category.toLowerCase());
 // 
 function randomRecommends(arr) {
   let recommends = recommendedItems.slice();
   const randomElements = [];
   for (let i = 0; i < 3; i++) {
     const randomIndex = Math.floor(Math.random() * recommends.length);
     randomElements.push(recommends.splice(randomIndex, 1)[0]);
   }
   return randomElements;
 }

  return (
    <div className="recommended">
      <h1>Recommended for you</h1>
      <div className="recommended-items">
        {randomRecommends().map((item) => {
          return (
            <Item
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

export default Recommended