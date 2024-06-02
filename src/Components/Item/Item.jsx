import React, { useContext, useEffect, useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { ShopContext } from "../../Context/ShopContext";
 
const Item = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XXL", "XL", "L", "M", "S", "XS", "XXS"];
  const { addToCart, chooseSize, openCart } = useContext(ShopContext);
  const [index, setIndex] = useState(0);
  const { id, image, price, name } = props;

  const imageData = image[0]

  const handleSizeChange = (sizeId, sizeName) => {
    chooseSize(sizeId, sizeName);
    setSelectedSize(sizeName);
    addToCart(sizeId);
    openCart();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > image.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = image.length - 1;
      }
      return index;
    });
  };

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
                onClick={() => handleSizeChange(props.id, size)}
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
          <Link to={`/product/${id}`}>
            <img
              src={image[index]}
              alt="item-image"
              // onClick={window.scrollTo(0, 0)}
              className="item-image"
            />
          </Link>
        </div>
      </div>
      <p>{name}</p>
      <p>
        <strong>${price}</strong>
      </p>
    </div>
  );
};

export default Item;
