import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        <div className="logo">FashionHub</div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => isMobile && setIsMenuOpen(false)}>Home</a>
          <a href="#shop" onClick={() => isMobile && setIsMenuOpen(false)}>Shop</a>
          <a href="#new-arrivals" onClick={() => isMobile && setIsMenuOpen(false)}>New Arrivals</a>
          <a href="#sale" onClick={() => isMobile && setIsMenuOpen(false)}>Sale</a>
        </div>
        
        <div className="nav-actions">
          <div className="nav-icons">
            <button className="icon-btn search-btn">
              <i className="fas fa-search"></i>
            </button>
            <button className="icon-btn account-btn">
              <i className="fas fa-user"></i>
            </button>
            <button className="icon-btn cart-btn">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">0</span>
            </button>
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
