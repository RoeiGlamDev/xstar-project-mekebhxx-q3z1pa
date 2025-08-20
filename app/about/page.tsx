import React from 'react';
import styles from './AboutPage.module.css'; // Importing CSS module for styling

const AboutPage: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>About GlamCS</h1>
            <p className={styles.description}>
                Welcome to GlamCS, where luxury meets elegance in the world of cosmetics. Our products are designed 
                to enhance your natural beauty with a touch of sophistication.
            </p>
            <div className={styles.highlights}>
                <h2 className={styles.subtitle}>Why Choose GlamCS?</h2>
                <ul className={styles.benefitsList}>
                    <li>High-quality ingredients</li>
                    <li>Luxurious 3D designs</li>
                    <li>Elegant packaging in orange and white</li>
                    <li>Exceptional customer service</li>
                </ul>
            </div>
            <footer className={styles.footer}>
                <p>&copy; 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;