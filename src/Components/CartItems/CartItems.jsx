import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";


const CartItems = () => {
 const { allProducts, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className='cartitems'>
     {allProducts.map((e)=>{
      if(cartItems[e.id] > 0){
        return (
          <div key={e.id}>
            <div className="cartitems-img">
              <img src={e.image[1]} alt="" />
            </div>
            <div className="cartitems-info">
              <p className="cartitem-name">
                {e.name}
              </p>
              <p className="cartitem-size"></p>
              <div className="cartitem-quantity">
                <FaMinus />
                <p>{cartItems[e.id]}</p>
                <FaPlus />
              </div>
            </div>
            <div className="cartitems-right">
              
            </div>
          </div>
        );
      }
     })}
    </div>
  )
}

export default CartItems