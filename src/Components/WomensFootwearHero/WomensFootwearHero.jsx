import React from 'react';
import "./WomensFootwearHero.css";
import womensFootwearHeroImg from "../Assets/womens_footwears/AT232WS502V015014TheAtticoLuzMule105mmTurquoiseSatin_1724_720x.jpg";


const WomensFootwearHero = () => {
  return (
    <div className="womensfootwearhero">
      <div className="womensfootwearhero-container">
        <div className="womensfootwearhero-left">
          <img src={womensFootwearHeroImg} alt="womensfootwearhero-img" />
        </div>
        <div className="womensfootwearhero-right">
          <h2>
            Footwear For <br /> All
            <button>Explore</button>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WomensFootwearHero