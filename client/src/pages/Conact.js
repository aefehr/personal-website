import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">CONTACT</h1>

                <div className="contact-divider"></div>

                <div className="contact-info">
                    <div className="contact-item">
                        <strong>MAIL</strong>
                        <a href="mailto:fehr.allie@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <span className="arrow">↗</span> fehr.allie@gmail.com
                        </a>
                    </div>
                    <div className="contact-item">
                        <strong>GITHUB</strong>
                        <a href="https://github.com/aefehr" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <span className="arrow">↗</span> github.com/aefehr
                        </a>
                    </div>
                    <div className="contact-item">
                        <strong>LINKEDIN</strong>
                        <a href="https://linkedin.com/in/allie-fehr" className="contact-link" target="_blank" rel="noopener noreferrer">
                            <span className="arrow">↗</span> linkedin.com/in/allie-fehr
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;



