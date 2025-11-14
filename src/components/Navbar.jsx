import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink 
          to="/" 
          className={({ isActive }) => `logo ${isActive ? 'active' : ''}`} 
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          FashionHub
        </NavLink>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/new-arrivals" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            New Arrivals
          </NavLink>
          <NavLink 
            to="/sale" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            On Sale
          </NavLink>
          <NavLink 
            to="/bestsellers" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            Bestsellers
          </NavLink>
          <NavLink 
            to="/cart" 
            className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            <i className="fas fa-shopping-cart"></i>
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </NavLink>
        </div>
        
        <div className="nav-actions">
          <div className="nav-icons">
            <button className="icon-btn search-btn">
              <i className="fas fa-search"></i>
            </button>
            <button className="icon-btn account-btn">
              <i className="fas fa-user"></i>
            </button>
            <NavLink
              to="/wishlist"
              className="icon-btn wishlist-btn"
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              <i className="far fa-heart"></i>
              {getWishlistCount() > 0 && (
                <span className="cart-count">{getWishlistCount()}</span>
              )}
            </NavLink>
          </div>
          
          {isMobile && (
            <button className="hamburger" onClick={toggleMenu}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
