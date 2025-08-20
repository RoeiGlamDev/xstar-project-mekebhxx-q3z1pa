import React from 'react';
import './styles.css'; // Import your CSS styles here

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">GlamCS</h1>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2>Elevate Your Beauty</h2>
          <p>Discover luxury cosmetics that enhance your natural beauty.</p>
          <button className="shop-now">Shop Now</button>
        </section>
        <section className="featured-products">
          <h3>Featured Products</h3>
          <div className="product-grid">
            {/* Example product cards */}
            <div className="product-card">
              <img src="/images/product1.jpg" alt="Product 1" />
              <h4>Luxury Lipstick</h4>
              <p>$29.99</p>
            </div>
            <div className="product-card">
              <img src="/images/product2.jpg" alt="Product 2" />
              <h4>Silk Foundation</h4>
              <p>$49.99</p>
            </div>
            <div className="product-card">
              <img src="/images/product3.jpg" alt="Product 3" />
              <h4>Elegant Eyeshadow</h4>
              <p>$39.99</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 GlamCS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;