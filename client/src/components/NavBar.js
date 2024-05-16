import React from 'react';
import './NavBar.css';

function Navbar() {
    return (
        <div className="navbar">
            <a href="#home">Allie Fehr</a>
            <div className="navbar-links">
                <a href="#about">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact me</a>
            </div>
        </div>
    );
}

export default Navbar;
