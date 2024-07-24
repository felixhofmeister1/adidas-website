import React, { useEffect, useState } from 'react';
import './HeroCarousel.css';

const images = [
  `${process.env.PUBLIC_URL}/images/hero-banner-1.jpg`,
  `${process.env.PUBLIC_URL}/images/hero-banner-2.jpg`,
  `${process.env.PUBLIC_URL}/images/hero-banner-3.jpg`,
];

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          className={`hero-slide ${currentIndex === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default HeroCarousel;
