import React from 'react';
import './CheckoutConfirmationModal.css';

function CheckoutConfirmationModal({ cartItems, totalPrice, onClose, onConfirm }) {
  return (
    <div className="checkout-modal">
      <div className="checkout-modal-content">
        <h2>Confirm Purchase</h2>
        <p>Are you sure you want to buy:</p>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} {item.size && `(${item.size})`} - {item.price}
            </li>
          ))}
        </ul>
        <p>At a total price of: ${totalPrice.toFixed(2)}</p>
        <div className="checkout-modal-buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutConfirmationModal;
