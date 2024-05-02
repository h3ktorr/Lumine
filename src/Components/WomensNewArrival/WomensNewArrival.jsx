import React from "react";
import "./WomensNewArrival.css";
import womensnewarrival_image from "../Assets/womens_outerwear/Womens_Fall_23_Ecomm_LOOK-32_SHOT-1_4973_720x.jpg";

const WomensNewArrival = () => {
  return (
    <div className="womensnewarrival">
      <div className="womensnewarrival-container">
        <div className="womensnewarrival-left">
          <h2>New Arrivals</h2>
          <button>Explore</button>
        </div>
        <div className="womensnewarrival-right">
          <img src={womensnewarrival_image} alt="womensnewarrival-img" />
        </div>
      </div>
    </div>
  );
};

export default WomensNewArrival;
