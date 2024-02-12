import React from 'react';
import Hero from '../Components/Hero/Hero';
import './CSS/Shop.css'
import BestSellers from '../Components/BestSellers/BestSellers';
import CollectionButton from '../Components/CollectionButton/CollectionButton';
import HolidaySale from '../Components/HolidaySale/HolidaySale';

const Shop = () => {
  return (
    <div className='shop'>
      <Hero/>
      <BestSellers/>
      <CollectionButton />
      <HolidaySale/>
    </div>
  )
}

export default Shop