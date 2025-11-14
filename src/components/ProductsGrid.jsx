import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductsGrid.css';

// Sample product data (in a real app, this would come from an API)
const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    sale: true,
    salePrice: 19.99
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Floral Summer Dress',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    sale: true,
    salePrice: 39.99
  },
  {
    id: 4,
    name: 'Denim Jacket',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167d1e06f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Casual Sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    sale: true,
    salePrice: 69.99
  },
  {
    id: 6,
    name: 'Knit Sweater',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 7,
    name: 'Leather Handbag',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 8,
    name: 'Wool Coat',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    sale: true,
    salePrice: 119.99
  }
];

const ProductsGrid = () => {
  return (
    <section className="products-section" id="shop">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">New Arrivals</button>
          <button className="filter-btn">On Sale</button>
          <button className="filter-btn">Bestsellers</button>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
