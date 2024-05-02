import React from 'react';
import "./MensFootwearHero.css";
import mensFootwearHeroImg from "../Assets/mens_footwear/TB0A6DSWEN1-Kith-x-Timberland-Field-Boot-Leather-Wheat_0529_720x.jpg";

const MensFootwearHero = () => {
  return (
    <div className="mensfootwearhero">
      <div className="mensfootwearhero-container">
        <div className="mensfootwearhero-left">
          <img src={mensFootwearHeroImg} alt="mensfootwearhero-img" />
        </div>
        <div className="mensfootwearhero-right">
          <h2>
            Footwear For <br /> All
            <button>Explore</button>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MensFootwearHero