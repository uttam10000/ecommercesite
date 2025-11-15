import React from 'react';
import ProductsGrid from '../components/ProductsGrid';

const NewArrivals = () => {
  return (
    <div className="page-container">
      <h1>New Arrivals</h1>
      <p className="page-subtitle">Discover our latest collection</p>
      <ProductsGrid filter="new" />
    </div>
  );
};

export default NewArrivals;
