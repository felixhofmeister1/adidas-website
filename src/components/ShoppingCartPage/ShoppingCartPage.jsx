import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutConfirmationModal from '../CheckoutConfirmationModal/CheckoutConfirmationModal';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;
    setShowCheckoutModal(true);
  };

  const handleConfirmCheckout = () => {
    alert('Thank you for shopping at Adidas!');
    clearCart();
    setShowCheckoutModal(false);
    window.location.href = "/";
  };

  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`} className="cart-item">
              <img src={item.src} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name} {item.size && `(${item.size})`}</h2>
                <p className="cart-item-price">{item.price}</p>
                <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h2>
      <button className="checkout-button" onClick={handleProceedToCheckout} disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>
      {showCheckoutModal && (
        <CheckoutConfirmationModal
          cartItems={cartItems}
          totalPrice={totalPrice}
          onConfirm={handleConfirmCheckout}
          onClose={() => setShowCheckoutModal(false)}
        />
      )}
    </div>
  );
}

export default ShoppingCartPage;
