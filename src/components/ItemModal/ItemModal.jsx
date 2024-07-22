import React, { useState } from 'react';
import './ItemModal.css';

function ItemModal({ item, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    onAddToCart(item, selectedSize);
  };

  return (
    <div className="item-modal">
      <div className="item-modal-content">
        <img src={item.src} alt={item.name} className="item-modal-image" />
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <div className="size-selection">
          <label>
            <input
              type="radio"
              name="size"
              value="S"
              onChange={(e) => setSelectedSize(e.target.value)}
            /> S
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="M"
              onChange={(e) => setSelectedSize(e.target.value)}
            /> M
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="L"
              onChange={(e) => setSelectedSize(e.target.value)}
            /> L
          </label>
        </div>
        <div className="modal-buttons">
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
