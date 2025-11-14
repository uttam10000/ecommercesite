import React from 'react';
import ProductsGrid from '../components/ProductsGrid';

const Bestsellers = () => {
  return (
    <div className="page-container">
      <h1>Bestsellers</h1>
      <p className="page-subtitle">Our most popular items</p>
      <ProductsGrid filter="bestseller" />
    </div>
  );
};

export default Bestsellers;
