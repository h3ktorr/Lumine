import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Cart = () => {
  const {isCartOpen, closeCart} = useContext(ShopContext)
  return (
    <div className={isCartOpen ? 'cart show' : 'cart'}>
     <div className="cart-container">
      
     </div>
    </div>
  )
}

export default Cart