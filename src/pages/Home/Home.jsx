import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeroCarousel from './HeroCarousel';

function Home() {
  return (
    <div className="homepage">
      <h1 className="section-title">My Adidas Website</h1>
      <HeroCarousel />
      <div className="section-grid">
        <Link to="/men" className="section-card">
          <img src="/images/for-men.avif" alt="Men's Collection" />
          <div className="section-label">Men</div>
        </Link>
        <Link to="/women" className="section-card">
          <img src="/images/for-women.avif" alt="Women's Collection" />
          <div className="section-label">Women</div>
        </Link>
        <Link to="/children" className="section-card">
          <img src="/images/for-children.avif" alt="Kids' Collection" />
          <div className="section-label">Kids</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
