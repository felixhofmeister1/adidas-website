import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ image, title, description, price }) => {
  return (
    <div className="item-detail">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ItemDetail;
