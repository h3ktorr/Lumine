import React from 'react';
import "./CSS/WomenFootwear.css";
import WomensFootwear from '../Components/WomensFootwear/WomensFootwear';

const WomenFootwear = () => {
  return (
    <div className="womenfootwear">
      <div className="womenfootwear-hero">
        <h2>Footwears for you</h2>
      </div>
      <WomensFootwear amount={11} />
    </div>
  );
}

export default WomenFootwear