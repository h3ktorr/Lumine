import React from 'react';
import "./CSS/MenAccessories.css";
import MensAccessories from '../Components/MensAccessories/MensAccessories'

const MenAccessories = () => {
  return (
    <div className="menaccessories">
      <div className="menaccessories-hero">
        <h2>Accessories for you</h2>
      </div>
      <MensAccessories amount={11} />
    </div>
  );
}

export default MenAccessories