import React from 'react';
import "./CSS/MenTop.css";
import MensTop from '../Components/MensTop/MensTop';
import menTopHeroImage from "../Components/Assets/men tops/KHM031556-002-DETAIL-1_720x.jpg";

const MenTop = () => {
  return (
    <div className="mentop">
      <div className="mentop-hero">
        <div className="mentop-heroimg">
          <img src={menTopHeroImage} alt="" />
        </div>
        <h2>Tops for you</h2>
      </div>
      <div className="mentop-items"></div>
    </div>
  );
}

export default MenTop