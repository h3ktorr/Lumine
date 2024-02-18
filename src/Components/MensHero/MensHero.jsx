import React from 'react';
import './MensHero.css' 
import menshero_image from "../Assets/mens outerwears/KHM010292-001-FRONT_720x.jpg";

const MensHero = () => {
  return (
    <div className="menshero">
      <div className="menshero-container">
        <div className="menshero-left">
          <h2>
            Browse Our Hoodies <br /> Collection
          </h2>
          <button>Explore</button>
        </div>
        <div className="menshero-right">
          <img src={menshero_image} alt="menshero-img" />
        </div>
      </div>
    </div>
  );
}

export default MensHero