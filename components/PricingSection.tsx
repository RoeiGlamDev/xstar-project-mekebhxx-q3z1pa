import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$29</p>
                        <p className="card-description">Essential cosmetics for everyday use.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card premium">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$59</p>
                        <p className="card-description">Luxury cosmetics with exclusive benefits.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe Package</h3>
                        <p className="card-price">$99</p>
                        <p className="card-description">All-inclusive cosmetics for the ultimate experience.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;