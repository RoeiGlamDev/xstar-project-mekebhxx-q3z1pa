import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <h1>GlamCS Pricing</h1>
                <p>Experience luxury with our premium cosmetics.</p>
            </header>
            <section className="pricing-plans">
                <div className="plan">
                    <h2>Basic</h2>
                    <p>$29/month</p>
                    <ul>
                        <li>Access to basic products</li>
                        <li>Standard support</li>
                    </ul>
                    <button className="btn-select">Select Plan</button>
                </div>
                <div className="plan">
                    <h2>Premium</h2>
                    <p>$49/month</p>
                    <ul>
                        <li>Access to all products</li>
                        <li>Priority support</li>
                        <li>Exclusive discounts</li>
                    </ul>
                    <button className="btn-select">Select Plan</button>
                </div>
                <div className="plan">
                    <h2>Luxury</h2>
                    <p>$99/month</p>
                    <ul>
                        <li>All premium features</li>
                        <li>Personalized consultations</li>
                        <li>Free shipping</li>
                    </ul>
                    <button className="btn-select">Select Plan</button>
                </div>
            </section>
            <footer className="pricing-footer">
                <p>&copy; 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;