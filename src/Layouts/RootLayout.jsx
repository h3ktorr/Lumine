import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Cart from '../Components/Cart/Cart';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';

function RootLayout() {
  return (
    <div className='root-layout'>
     <Navbar />
     <Cart />
     <Sidebar />
     <Outlet />
     <Footer />
    </div>
  )
}

export default RootLayout