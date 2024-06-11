import React from 'react';
import Hero from '../Components/Hero/Hero';
import './CSS/Shop.css'
import BestSellers from '../Components/BestSellers/BestSellers';
import CollectionButton from '../Components/CollectionButton/CollectionButton';
import HolidaySale from '../Components/HolidaySale/HolidaySale';
import NowInSale from '../Components/NowInSale/NowInSale';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import ShopAllCollection from '../Components/ShopAllCollection/ShopAllCollection';

const Shop = () => {
  return (
    <div className='shop'>
      <Hero/>
      <BestSellers/>
      <CollectionButton />
      <ShopAllCollection />
      <HolidaySale/>
      <NowInSale/>
      <NewsLetter/>
    </div>
  )
}

export default Shop