import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
// import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from "./Components/Footer/Footer";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Cart /> 
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Men />} />
          <Route path="/womens" element={<Women />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
