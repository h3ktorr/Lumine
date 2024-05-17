import React from 'react';
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div className='product-layout'>
      <Outlet />
    </div>
  )
}

export default ProductLayout