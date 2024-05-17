import React from 'react';
import { Outlet } from "react-router-dom";

const WomenLayout = () => {
  return (
    <div className='women-layout'>
      <Outlet />
    </div>
  )
}

export default WomenLayout