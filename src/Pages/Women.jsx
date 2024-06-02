import React from 'react'
import WomensHero from '../Components/WomensHero/WomensHero'
import './CSS/Women.css'
import WomensOuterwear from '../Components/WomensOuterwear/WomensOuterwear'
import WomensTop from '../Components/WomensTop/WomensTop'
import WomensNewArrival from '../Components/WomensNewArrival/WomensNewArrival'
import WomensBottom from '../Components/WomensBottom/WomensBottom'
import WomensDress from '../Components/WomensDress/WomensDress'
import WomensAccessories from '../Components/WomensAccessories/WomensAccessories'
import WomensFootwearHero from '../Components/WomensFootwearHero/WomensFootwearHero'
import WomensFootwear from '../Components/WomensFootwear/WomensFootwear'
import ExploreWomenButton from '../Components/ExploreWomenButton/ExploreWomenButton'

const Women = () => {
  return (
    <div className="women">
      <WomensHero />
      <WomensOuterwear amount={6} />
      <WomensTop amount={6} />
      <WomensNewArrival />
      <WomensBottom amount={6} />
      <WomensDress amount={6} />
      <WomensAccessories amount={6} />
      <WomensFootwearHero />
      <WomensFootwear amount={9} />
      <ExploreWomenButton />
    </div>
  );
}

export default Women