import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
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
              <li>
                <span>
                  <a
                    href="mailto:info@fashionhub.com"
                    className="email-link-main"
                  >
                    Contact Us
                  </a>
                  <span className="email-separator"> · </span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@fashionhub.com"
                    target="_blank"
                    rel="noreferrer"
                    className="email-link-gmail"
                  >
                    Gmail
                  </a>
                </span>
              </li>
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
              <li>
                <i className="fas fa-envelope"></i>{' '}
                <span>
                  <a href="mailto:info@fashionhub.com" className="email-link-main">
                    info@fashionhub.com
                  </a>
                  <span className="email-separator"> · </span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@fashionhub.com"
                    target="_blank"
                    rel="noreferrer"
                    className="email-link-gmail"
                  >
                    Gmail
                  </a>
                </span>
              </li>
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
