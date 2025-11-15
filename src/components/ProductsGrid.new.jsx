import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../data/products';
import '../styles/ProductsGrid.css';

// Function to filter products based on the current route
const getFilteredProducts = (products, filter) => {
  if (!products) return [];
  
  switch(filter) {
    case 'new':
      return products.filter(product => product.isNew);
    case 'sale':
      return products.filter(product => product.sale);
    case 'bestseller':
      return products.filter(product => product.bestseller);
    default:
      return products;
  }
};

const ProductsGrid = ({ products: propProducts }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Use products from props if provided, otherwise use the imported products
  const allProducts = propProducts || products;
  
  useEffect(() => {
    // Set active filter based on current route
    const path = location.pathname;
    if (path.includes('new-arrivals')) {
      setActiveFilter('new');
    } else if (path.includes('sale')) {
      setActiveFilter('sale');
    } else if (path.includes('bestsellers')) {
      setActiveFilter('bestseller');
    } else {
      setActiveFilter('all');
    }
  }, [location]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    switch(filter) {
      case 'new':
        navigate('/new-arrivals');
        break;
      case 'sale':
        navigate('/sale');
        break;
      case 'bestseller':
        navigate('/bestsellers');
        break;
      default:
        navigate('/');
    }
  };
  
  const filteredProducts = getFilteredProducts(allProducts, activeFilter);

  return (
    <section className="products-section" id="shop">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'new' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('new')}
          >
            New Arrivals
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'sale' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('sale')}
          >
            On Sale
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'bestseller' ? 'active' : ''}`}
            onClick={() => handleFilterClick('bestseller')}
          >
            Bestsellers
          </button>
        </div>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
