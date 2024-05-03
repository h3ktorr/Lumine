import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import Shop from "./Pages/Shop";
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import MenAccessories from "./Pages/MenAccessories";
import MenBottom from "./Pages/MenBottom";
import MenTop from "./Pages/MenTop";
import MenOuterwear from "./Pages/MenOuterwear";
import MenFootwear from "./Pages/MenFootwear";
import WomenAccessories from "./Pages/WomenAccessories";
import WomenBottom from "./Pages/WomenBottom";
import WomenTop from "./Pages/WomenTop";
import WomenOuterwear from "./Pages/WomenOuterwear";
import WomenFootwear from "./Pages/WomenFootwear";
import WomenDress from "./Pages/WomenDress";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Men />}>
            <Route path="accessories" element={<MenAccessories />} />
            <Route path="bottom" element={<MenBottom />} />
            <Route path="footwear" element={<MenFootwear />} />
            <Route path="outerwear" element={<MenOuterwear />} />
            {/* <Route path="top" element={<MenTop />} /> */}
          </Route>
          <Route path="/womens" element={<Women />}>
            <Route path="accessories" element={<WomenAccessories />} />
            <Route path="bottom" element={<WomenBottom />} />
            <Route path="footwear" element={<WomenFootwear />} />
            <Route path="outerwear" element={<WomenOuterwear />} />
            <Route path="top" element={<WomenTop />} />
            <Route path="dress" element={<WomenDress />} />
          </Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/mentop" element={<WomenFootwear />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
