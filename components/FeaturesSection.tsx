import React from 'react';
import './FeaturesSection.css'; // Import CSS for styling

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">Why Choose GlamCS?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon luxury-effect"> {/* 3D effect class */}
                            <i className="fas fa-gem"></i> {/* Example icon */}
                        </div>
                        <h3 className="feature-heading">Premium Quality</h3>
                        <p className="feature-description">Our products are crafted with the finest ingredients.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon luxury-effect"> {/* 3D effect class */}
                            <i className="fas fa-paint-brush"></i> {/* Example icon */}
                        </div>
                        <h3 className="feature-heading">Innovative Formulas</h3>
                        <p className="feature-description">Experience cutting-edge beauty technology.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon luxury-effect"> {/* 3D effect class */}
                            <i className="fas fa-heart"></i> {/* Example icon */}
                        </div>
                        <h3 className="feature-heading">Cruelty-Free</h3>
                        <p className="feature-description">We are committed to ethical beauty practices.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon luxury-effect"> {/* 3D effect class */}
                            <i className="fas fa-star"></i> {/* Example icon */}
                        </div>
                        <h3 className="feature-heading">Luxurious Experience</h3>
                        <p className="feature-description">Indulge in a lavish beauty journey.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;