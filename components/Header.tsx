import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>GlamCS</h1> {/* Logo */}
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </header>
    );
}

export default Header;