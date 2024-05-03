import React from 'react';
import "./CSS/WomenDress.css";
import WomensDress from '../Components/WomensDress/WomensDress';

const WomenDress = () => {
  return (
    <div className="womendress">
      <div className="womendress-hero">
        <h2>Dresses for you</h2>
      </div>
      <WomensDress amount={11} />
    </div>
  );
}

export default WomenDress