import React from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styles

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact GlamCS</h1>
                <p>Get in touch with us for any inquiries.</p>
            </header>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            <footer className="contact-footer">
                <p>Follow us on social media for updates!</p>
            </footer>
        </div>
    );
};

export default ContactPage;