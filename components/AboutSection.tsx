import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-description">
                    Discover the elegance of high-end cosmetics designed for the modern individual. 
                    Our products blend luxury with innovation, offering a unique experience that enhances your beauty.
                </p>
                <div className="about-vision">
                    <h2>Our Vision</h2>
                    <p>
                        At GlamCS, we believe in empowering individuals through beauty. 
                        Our mission is to provide top-quality cosmetics that inspire confidence and self-expression.
                    </p>
                </div>
            </div>
            <div className="about-image">
                {/* Placeholder for 3D luxury design image */}
                <img src="/path/to/luxury-image.jpg" alt="Luxury Cosmetics" />
            </div>
        </section>
    );
};

export default AboutSection;