import React from 'react';
import ProductsGrid from '../components/ProductsGrid';

const OnSale = () => {
  return (
    <div className="page-container">
      <h1>On Sale</h1>
      <p className="page-subtitle">Special offers and discounts</p>
      <ProductsGrid filter="sale" />
    </div>
  );
};

export default OnSale;
