import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
    {
        name: "Sophia L.",
        feedback: "GlamCS has transformed my makeup routine! The quality is unmatched.",
        image: "/images/testimonial1.jpg" // Path to the image
    },
    {
        name: "Olivia K.",
        feedback: "I love the luxurious feel of the products. Highly recommend!",
        image: "/images/testimonial2.jpg" // Path to the image
    },
    {
        name: "Emma W.",
        feedback: "The 3D effects in their packaging are stunning. A true luxury experience!",
        image: "/images/testimonial3.jpg" // Path to the image
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                        <h3 className="testimonial-name">- {testimonial.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;