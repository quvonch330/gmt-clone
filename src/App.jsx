import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import About from "./pages/About";
import ContactPages from "./pages/Contact/ContactPages";
import Header1 from "./components/Home/Header";
import { Footer } from "./components/About/Footer";
import UslugPage from "./pages/Uslug";
import Blogcom from "./pages/blog/Blogcom";
import Togivepage from "./pages/togive/Togivepage";
import PaymetPage from "./pages/paymet/PaymetPage";
import GuarantePage from "./pages/guarante/GuarantePage";
import Manufacturespage from "./pages/manufacturers/Manufacturespage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <div className="bg-[#f8f7f3]">
        <Router>
          <Header1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:category" element={<CatalogPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/Blogcom" element={<Blogcom />} />
            <Route path="/contact" element={<ContactPages />} />
            <Route path="/uslugpag" element={<UslugPage />} />
            <Route path="/togive" element={<Togivepage />} />
            <Route path="/Paymet" element={<PaymetPage />} />
            <Route path="/guarante" element={<GuarantePage />} />
            <Route path="/manufactures" element={<Manufacturespage />} />



          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;



