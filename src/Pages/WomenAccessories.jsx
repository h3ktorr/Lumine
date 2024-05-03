import React from 'react';
import "./CSS/WomenAccessories.css";
import WomensAccessories from '../Components/WomensAccessories/WomensAccessories';

const WomenAccessories = () => {
  return (
    <div className="womenaccessories">
      <div className="womenaccessories-hero">
        <h2>Accessories for you</h2>
      </div>
      <WomensAccessories amount={11} />
    </div>
  );
}

export default WomenAccessories