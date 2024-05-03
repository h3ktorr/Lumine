import React from 'react';
import "./CSS/WomenTop.css";
import WomensTop from '../Components/WomensTop/WomensTop';

const WomenTop = () => {
  return (
    <div className="womentop">
      <div className="womentop-hero">
        <h2>Tops for you</h2>
      </div>
      <WomensTop amount={11} />
    </div>
  );
}

export default WomenTop