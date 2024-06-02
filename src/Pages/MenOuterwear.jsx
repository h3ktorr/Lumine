import React from 'react';
import "./CSS/MenOuterwear.css";
import MensOuterwear from '../Components/MensOuterWear/MensOuterwear';

const MenOuterwear = () => {
  return (
    <div className="menouterwear">
      <div className="menouterwear-hero">
        <h2>Outerwears for you</h2>
      </div>
      <MensOuterwear amount={11}/>
    </div>
  );
}

export default MenOuterwear