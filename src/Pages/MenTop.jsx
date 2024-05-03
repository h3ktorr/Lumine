import React from 'react';
import "./CSS/MenTop.css";
import MensTop from '../Components/MensTop/MensTop';

const MenTop = () => {
  return (
    <div className="mentop">
      <div className="mentop-hero">
        <h2>Tops for you</h2>
      </div>
      <MensTop amount={11} />
    </div>
  );
}

export default MenTop