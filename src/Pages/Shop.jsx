import React from 'react';
import Hero from '../Components/Hero/Hero';
import './CSS/Shop.css'
import BestSellers from '../Components/BestSellers/BestSellers';

const Shop = () => {
  return (
    <div className='shop'>
      <Hero/>
      <BestSellers/>
    </div>
  )
}

export default Shop