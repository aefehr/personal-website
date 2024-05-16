import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <h1>Hi! 👋 I am Allie.</h1>
            <h2>A software developer from San Francisco</h2>
            <div className="buttons">
                <button onClick={() => window.location.href = '#contact'}>Contact me</button>
                <button onClick={() => window.location.href = '#projects'}>View portfolio</button>
            </div>
        </section>
    );
}

export default Hero;
