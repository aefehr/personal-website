import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="content">
                <h1>Hi, I'm Allie!</h1>
                <h2>A computer science and cognitive science student at
                <br/>the <span class="highlight">University of Pennsylvania</span></h2>
                <h2>A software engineer intern at <span class="highlight">Yahoo</span></h2>
                <h2>A software developer at CHOP</h2>
                <div className="buttons">
                    <button onClick={() => window.location.href = '#contact'}>Resume</button>
                    <button onClick={() => window.location.href = '#projects'}>Projects</button>
                </div>
            </div>
            <div className="circles">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
            </div>
        </section>
    );
}

export default Hero;

