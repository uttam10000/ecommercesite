import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="quick-view-btn">Quick View</button>
          <button className="add-to-cart-btn">Add to Cart</button>
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
        {product.sale && <span className="sale-badge">Sale</span>}
      </div>
    </div>
  );
};

export default ProductCard;
