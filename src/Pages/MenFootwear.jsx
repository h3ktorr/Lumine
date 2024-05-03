import React from 'react';
import "./CSS/MenFootwear.css";
import MensFootwear from '../Components/MensFootwear/MensFootwear';

const MenFootwear = () => {
  return (
    <div className="menfootwear">
      <div className="menfootwear-hero">
        <h2>Footwears for you</h2>
      </div>
      <MensFootwear amount={11} />
    </div>
  );
}

export default MenFootwear