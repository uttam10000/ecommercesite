import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import NewArrivals from './pages/NewArrivals';
import OnSale from './pages/OnSale';
import Bestsellers from './pages/Bestsellers';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Toast from './components/Toast';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppLayout = () => {
  const { toastMessage } = useCart();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />
      <Toast message={toastMessage} />
      <main>
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <ProductsGrid />
                  <Newsletter />
                </>
              } 
            />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/sale" element={<OnSale />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <AppLayout />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
