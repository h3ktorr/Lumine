import React from 'react';
import MensHero from '../Components/MensHero/MensHero';
import './CSS/Men.css';
import MensAccessories from '../Components/MensAccessories/MensAccessories';
import MensOuterwear from '../Components/MensOuterWear/MensOuterwear';
import MensTop from '../Components/MensTop/MensTop';
import MensNewArrival from '../Components/MensNewArrival/MensNewArrival';
import MensBottom from '../Components/MensBottom/MensBottom';
import MensFootwearHero from '../Components/MensFootwearHero/MensFootwearHero';
import MensFootwear from '../Components/MensFootwear/MensFootwear';
import ExploreMenButton from '../Components/ExploreMenButton/ExploreMenButton';

const Men = () => {
  return (
    <div className='men'>
     <MensHero />
     <MensOuterwear />
     <MensTop />
     <MensNewArrival />
     <MensBottom />
     <MensAccessories />
     <MensFootwearHero />
     <MensFootwear />
     <ExploreMenButton />
    </div>
  )
}

export default Men;