import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SectionPage from './components/SectionPage/SectionPage';
import ShoppingCartPage from './components/ShoppingCartPage/ShoppingCartPage';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<SectionPage category="men" />} />
          <Route path="/women" element={<SectionPage category="women" />} />
          <Route path="/children" element={<SectionPage category="children" />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
