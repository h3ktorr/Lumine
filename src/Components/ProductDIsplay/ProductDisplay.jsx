import React, { useContext, useEffect, useState } from 'react';
import "./ProductDisplay.css";
import { ShopContext } from '../../Context/ShopContext';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
 

const ProductDisplay = (props) => {
 const {product} = props; 
 const { addToCart, chooseSize } = useContext(ShopContext);
//  const [productImage, setProductImage] = useState(product.image)
 const [index, setIndex] = useState(0);
 const [selectedSize, setSelectedSize] = useState(null)
 const [sizeSelected, setSizeSelected] = useState(false)
 const sizes = ["XXL", "XL", "L", "M", "S", "XS", "XXS"];

 const handleSizeChange = (sizeId, sizeName) => {
  chooseSize(sizeId, sizeName);
  setSelectedSize(sizeName);
  setSizeSelected(true)
 }

 const nextSlide = () => {
   setIndex((oldIndex) => {
     let index = oldIndex + 1;
     if (index > product.image.length - 1) {
       index = 0;
     }
     return index;
   });
 };
 const prevSlide = () => {
   setIndex((oldIndex) => {
     let index = oldIndex - 1;
     if (index < 0) {
       index = product.image.length - 1;
     }
     return index;
   });
 };

 useEffect(()=>{
  setIndex(0);
  setSizeSelected(false);
  setSelectedSize(null);
 }, [product.image])

 useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > product.image.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {product.image.map((image, imageIndex) => {
          let position = "nextSlide";
          if (imageIndex === index) {
            position = "activeSlide";
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === product.image.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <img src={image} alt="" key={imageIndex} className={position} />
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
      <div className="productdisplay-right">
        <div className="productdisplay-details">
          <p className="product-name">{product.name}</p>
          <p>${product.price}</p>
          <p>{product.category}</p>
        </div>
        <div className="productdisplay-size">
          <p>Select Size</p>
          <div className="productdisplay-sizes">
            {sizes.map((size, sizeIndex) => (
              <div
                key={sizeIndex}
                onClick={() => handleSizeChange(product.id, size)}
                style={{
                  color: selectedSize === size ? "white" : "black",
                  backgroundColor:
                    selectedSize === size ? "black" : "transparent",
                }}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          {sizeSelected ? "Add To Cart" : "Select A Size"}
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay
