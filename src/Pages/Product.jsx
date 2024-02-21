import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';


const Product = () => {
  const {allProducts} = useContext(ShopContext)
  const {productId} = useParams()
  const product = allProducts.find((item) => item.id === Number(productId));
  return (
    <div>
     
    </div>
  )
}

export default Product