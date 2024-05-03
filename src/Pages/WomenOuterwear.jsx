import React from 'react';
import "./CSS/WomenOuterwear.css";
import WomensOuterwear from '../Components/WomensOuterwear/WomensOuterwear';

const WomenOuterwear = () => {
  return (
    <div className="womenouterwear">
      <div className="womenouterwear-hero">
        <h2>Outerwears for you</h2>
      </div>
      <WomensOuterwear amount={11} />
    </div>
  );
}

export default WomenOuterwear