import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            image={product.image} 
            title={product.title} 
            price={product.price} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
