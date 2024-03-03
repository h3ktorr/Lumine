import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDIsplay/ProductDisplay';
import './CSS/Product.css';
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Recommended from '../Components/Recommended/Recommended';


const Product = () => {
  const {allProducts} = useContext(ShopContext)
  const {productId} = useParams()
  const product = allProducts.find((item) => item.id === Number(productId));
  let amount = 3;
  let title = 'Recommended for you'
  return (
    <div className='product'>
     <ProductDisplay product={product}/>
     <Recommended product={product}/>
     <NewsLetter />
    </div>
  )
}

export default Product