import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import '../styles/Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="wishlist-empty">
        <h2>Your wishlist is empty</h2>
        <button
          className="continue-shopping"
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img
              src={item.images?.[0] || item.image}
              alt={item.name}
              className="wishlist-item-image"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/100x100?text=No+Image';
              }}
            />
            <div className="wishlist-item-details">
              <h3>{item.name}</h3>
              <p>
                ${Number(item.salePrice ?? item.price ?? 0).toFixed(2)}
              </p>
              <div className="wishlist-actions">
                <button
                  className="view-product"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  View Product
                </button>
                <button
                  className="remove-item"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
