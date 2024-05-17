import React from 'react';
import { Outlet } from "react-router-dom";

const MenLayout = () => {
  return (
    <div className='men-layout'>
      <Outlet />
    </div>
  )
}

export default MenLayout