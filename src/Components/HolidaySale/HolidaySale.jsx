import React from 'react'
import holidaySaleImg from "../Assets/mens_bottom/SHOT9_0434_720x.jpg";
import "./HolidaySale.css"

const HolidaySale = () => {
  return (
    <div className="holidaysale">
      <div className="holidaysale-container">
        <div className="holidaysale-left">
          <img src={holidaySaleImg} alt="holidaysale-img" />
        </div> 
        <div className="holidaysale-right">
          <h2>
            Holiday Sale <br /> 20% off
          </h2>
            <button>Shop</button>
        </div>
      </div>
    </div>
  );
}

export default HolidaySale