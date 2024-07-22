import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './NavbarComponent.css';

function NavbarComponent() {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.length;

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/children">Children</Link>
      <Link to="/shopping-cart">
        Shopping Cart {itemCount > 0 && <span className="cart-count">+{itemCount}</span>}
      </Link>
    </nav>
  );
}

export default NavbarComponent;
