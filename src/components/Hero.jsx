import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroImage = isMobile 
    ? 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    : 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <section 
      className="hero" 
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`
      }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Summer Collection 2025</h1>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>Discover the latest trends in fashion</p>
          <button 
            className="shop-now-btn fade-in" 
            style={{ animationDelay: '0.4s' }}
            onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
