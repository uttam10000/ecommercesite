import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates on new products and upcoming sales</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {isSubscribed && (
            <div className="subscription-success">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">FashionHub</h3>
            <p className="footer-about">Your one-stop destination for the latest fashion trends and styles. We offer high-quality clothing for every occasion.</p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#pinterest" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/new-arrivals">New Arrivals</a></li>
              <li><a href="/sale">Sale</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/shipping">Shipping & Returns</a></li>
              <li><a href="/size-guide">Size Guide</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> <span>123 Fashion St, Style City</span></li>
              <li><i className="fas fa-phone"></i> <span>+1 234 567 890</span></li>
              <li><i className="fas fa-envelope"></i> <span>info@fashionhub.com</span></li>
              <li><i className="fas fa-clock"></i> <span>Mon-Sat: 9:00 - 18:00</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} FashionHub. All rights reserved.
          </div>
          <div className="payment-methods">
            <i className="fab fa-cc-visa" title="Visa"></i>
            <i className="fab fa-cc-mastercard" title="Mastercard"></i>
            <i className="fab fa-cc-paypal" title="PayPal"></i>
            <i className="fab fa-cc-apple-pay" title="Apple Pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
