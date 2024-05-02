import React from 'react';
import "./WomensHero.css";
import womenshero_image from "../Assets/womens_dress/Womens_Fall_23_EcommDay2_LOOK58_SHOT1_2916copy_720x.jpg";

const WomensHero = () => {
  return (
    <div className="womenshero">
      <div className="womenshero-container">
        <div className="womenshero-left">
          <h2>
            Browse Our Dress <br /> Collection
          </h2>
          <button>Explore</button>
        </div>
        <div className="womenshero-right">
          <img src={womenshero_image} alt="womenshero-img" />
        </div>
      </div>
    </div>
  );
}

export default WomensHero