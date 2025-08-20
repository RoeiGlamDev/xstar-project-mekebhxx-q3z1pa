import React from 'react';
import './HeroSection.css'; // Import CSS for styling

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Elevate Your Beauty</h1>
        <p className="hero-subtitle">Discover the luxury of GlamCS cosmetics</p>
        <button className="hero-button">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="/path/to/your/3d-luxury-image.png" alt="Luxury Cosmetics" />
      </div>
    </div>
  );
};

export default HeroSection;