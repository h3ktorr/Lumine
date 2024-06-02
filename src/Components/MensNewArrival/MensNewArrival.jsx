import React from 'react';
import "./MensNewArrival.css";
import mensnewarrival_image from "../Assets/mens_outerwears/SHOT62_3637_720x.jpg";

const MensNewArrival = () => {
  return (
    <div className="mensnewarrival">
      <div className="mensnewarrival-container">
        <div className="mensnewarrival-left">
          <h2>New Arrivals</h2>
          <button>Explore</button>
        </div>
        <div className="mensnewarrival-right">
          <img src={mensnewarrival_image} alt="mensnewarrival-img" />
        </div>
      </div>
    </div>
  );
}

export default MensNewArrival