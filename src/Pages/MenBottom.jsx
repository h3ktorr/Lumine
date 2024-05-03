import React from 'react';
import "./CSS/MenBottom.css";
import MensBottom from '../Components/MensBottom/MensBottom';

const MenBottom = () => {
  return (
    <div className="menbottom">
      <div className="menbottom-hero">
        <h2>Bottoms for you</h2>
      </div>
      <MensBottom amount={11} />
    </div>
  );
}

export default MenBottom