import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    
    if (!foundProduct) {
      // Redirect to 404 or home if product not found
      navigate('/');
      return;
    }
    
    setProduct(foundProduct);
    // Set default selected color and size if available
    if (foundProduct.colors && foundProduct.colors.length > 0) {
      setSelectedColor(foundProduct.colors[0]);
    }
    if (foundProduct.sizes && foundProduct.sizes.length > 0) {
      setSelectedSize(foundProduct.sizes[0]);
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
    };

    addToCart(cartItem, quantity);
    // Optional: navigate('/cart'); or show a toast in future
  };

  const handleToggleWishlist = () => {
    if (!product) return;
    toggleWishlist(product);
  };

  const handleQuantityChange = (increment) => {
    setQuantity(prev => {
      const newQuantity = increment ? prev + 1 : prev - 1;
      return Math.max(1, newQuantity); // Ensure quantity doesn't go below 1
    });
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-details-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Back to Shop
        </button>
        
        <div className="product-details-container">
          <div className="product-gallery">
            <div className="main-image">
              <img
                src={product.images ? product.images[currentImage] : product.image}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x1000?text=Image+Unavailable';
                }}
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-container">
                {product.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/150x180?text=No+Image';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="price-container">
              {product.salePrice ? (
                <>
                  <span className="sale-price">${product.salePrice.toFixed(2)}</span>
                  <span className="original-price">${product.price.toFixed(2)}</span>
                  {product.sale && (
                    <span className="discount-badge">
                      {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                    </span>
                  )}
                </>
              ) : (
                <span className="price">${product.price.toFixed(2)}</span>
              )}
            </div>

            {product.description && (
              <div className="product-description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="product-option">
                <h4>Color: <span>{selectedColor}</span></h4>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <div 
                      key={index}
                      className={`color-option ${selectedColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="product-option">
                <h4>Size: <span>{selectedSize}</span></h4>
                <div className="size-options">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`size-option ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="quantity-selector">
              <h4>Quantity</h4>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(false)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(true)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
              <button className="wishlist-btn" onClick={handleToggleWishlist}>
                <i className={isInWishlist(product.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                {isInWishlist(product.id) ? ' Added to Wishlist' : ' Add to Wishlist'}
              </button>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{product.category || 'N/A'}</span>
              </div>
              {product.sku && (
                <div className="meta-item">
                  <span className="meta-label">SKU:</span>
                  <span className="meta-value">{product.sku}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
