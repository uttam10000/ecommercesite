import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/500x600?text=Image+Unavailable';
          }}
        />
        <div className="product-overlay">
          <button className="quick-view-btn" onClick={handleQuickView}>
            <i className="fas fa-search"></i> Quick View
          </button>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">
          {product.salePrice ? (
            <>
              <span className="sale-price">${product.salePrice.toFixed(2)}</span>
              <span className="original-price">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span>${product.price.toFixed(2)}</span>
          )}
        </div>
        <div className="product-badges">
          {product.isNew && <span className="badge badge-new">New</span>}
          {product.sale && <span className="badge badge-sale">Sale</span>}
          {product.bestseller && <span className="badge badge-bestseller">Bestseller</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
