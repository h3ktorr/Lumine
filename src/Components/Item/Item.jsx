import React, { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Item = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XXL", "XL", "L", "M", "S", "XS", "XXS"];

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  const nextSlide = () => {};
  const prevSlide = () => {};
  const handleSizeChange = () => {};
  return (
    <div className="item">
      <div
        className="item-imageContainer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hoverContainer">
          <div className="hoverButtons">
            <div
              className={isHovered ? "hoverPrev showPrev" : "hoverPrev"}
              onClick={prevSlide}
            >
              <FiChevronLeft />
            </div>
            <div
              className={isHovered ? "hoverNext showNext" : "hoverNext"}
              onClick={nextSlide}
            >
              <FiChevronRight />
            </div>
          </div>
          <div className={isHovered ? "hoverSizes showSizes" : "hoverSizes"}>
            {sizes.map((size, sizeIndex) => (
              <div
                key={sizeIndex}
                onClick={() => handleSizeChange(size)}
                style={
                  selectedSize === size
                    ? {
                        color: "white",
                        backgroundColor: "black",
                      }
                    : {}
                }
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="imageContainer">
          <Link to={`/product/${props.id}`}>
            <img
              src={props.image}
              alt="item-image"
              // onClick={window.scrollTo(0, 0)}
              className="item-image"
            />
          </Link>
        </div>
      </div>
      <p>{props.name}</p>
      <p>
        <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default Item;
