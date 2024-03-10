import React, { useContext, useState } from 'react';
import "./ProductDisplay.css";
import { ShopContext } from '../../Context/ShopContext';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


const ProductDisplay = (props) => {
 const {product} = props; 
 const {addToCart} = useContext(ShopContext);
 const dynamicImage = Object.keys(product.image).map((key) => product.image[key]).map(item => item.replace("/static/media/", ""));
 const [productImage, setProductImage] = useState(product.image)
 const [index, setIndex] = useState(0);
 console.log(productImage);
//  const getImage = () => {
//   Object.values(product.image).map((item, itemIndex) => {
//     let position = 'nextSlide';
//      const dynamicImagePath = item.replace("/static/media/", "");
//     console.log(dynamicImagePath)
//     if(itemIndex === index){
//       position = 'activeSlide';
//     }
//     if(itemIndex === index - 1 || (index === 0 && itemIndex === product.image.length - 1)){
//       position = 'lastSlide';
//     }
    
//   })
//  }
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {productImage.map((image, imageIndex) => {
          return <img src={image} alt="" key={imageIndex} />
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
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
            <div>XXL</div>
            <div>XL</div>
            <div>L</div>
            <div>M</div>
            <div>S</div>
            <div>XS</div>
            <div>XXS</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay