import React from 'react';
import "./CSS/WomenBottom.css";
import WomensBottom from '../Components/WomensBottom/WomensBottom';

const WomenBottom = () => {
  return (
    <div className="womenbottom">
      <div className="womenbottom-hero">
        <h2>Bottoms for you</h2>
      </div>
      <WomensBottom amount={11} />
    </div>
  );
}

export default WomenBottom