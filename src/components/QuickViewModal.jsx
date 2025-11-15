import React, { useEffect } from 'react';
import '../styles/QuickViewModal.css';

const QuickViewModal = ({ product, onClose }) => {
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('quick-view-overlay')) {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="quick-view-overlay">
      <div className="quick-view-modal">
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="quick-view-content">
          <div className="quick-view-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="quick-view-details">
            <h2>{product.name}</h2>
            
            <div className="price-container">
              {product.salePrice ? (
                <>
                  <span className="sale-price">${product.salePrice.toFixed(2)}</span>
                  <span className="original-price">${product.price.toFixed(2)}</span>
                  <span className="discount-badge">
                    {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                  </span>
                </>
              ) : (
                <span className="price">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="product-meta">
              {product.category && (
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <span className="meta-value">{product.category}</span>
                </div>
              )}
              
              {product.colors && product.colors.length > 0 && (
                <div className="meta-item">
                  <span className="meta-label">Colors:</span>
                  <div className="color-options">
                    {product.colors.map((color, index) => (
                      <span 
                        key={index} 
                        className="color-option" 
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {product.sizes && product.sizes.length > 0 && (
                <div className="meta-item">
                  <span className="meta-label">Sizes:</span>
                  <div className="size-options">
                    {product.sizes.map((size) => (
                      <button key={size} className="size-option">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="product-actions">
              <div className="quantity-selector">
                <button className="quantity-btn">-</button>
                <span className="quantity">1</span>
                <button className="quantity-btn">+</button>
              </div>
              
              <button className="add-to-cart-btn">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
              
              <button className="wishlist-btn">
                <i className="far fa-heart"></i>
              </button>
            </div>
            
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description || 'No description available for this product.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
