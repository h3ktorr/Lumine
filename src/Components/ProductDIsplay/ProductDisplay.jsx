import React from 'react';
import "./ProductDisplay.css";


const ProductDisplay = (props) => {
 const {product} = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <img src={product.image[1]} alt="" />
      </div>
      <div className="productdisplay-right">
        <div className="productdisplay-details">
          <p className='product-name'>{product.name}</p>
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
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDisplay