import React from 'react'
import './Hero.css'
import hero_image from "../Assets/womens_top/Womens_Fall_23_Ecomm-Day-2_LOOK-43_SHOT-3_0810_720x.jpg";

const Hero = () => {
  return (
    <div className='hero'>
     <div className="hero-container">
      <div className="hero-left">
       <h2>Check Out Our <br /> New Arrivals</h2>
       <button>Shop</button>
      </div>
      <div className="hero-right">
       <img src={hero_image} alt="hero-img" />
      </div>
     </div>
    </div>
  )
}

export default Hero