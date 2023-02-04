import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/Home/Home.jsx";
import Navbar from "./scenes/global/Navbar.jsx";
import Footer from "./scenes/global/Footer.jsx";
import ItemDetails from "./scenes/itemDetails/ItemDetails.jsx";
import CartMenu from "./scenes/global/CartMenu.jsx";
import Checkout from "./scenes/checkout/Checkout.jsx";
import Confirmation from "./scenes/checkout/Confirmation.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;