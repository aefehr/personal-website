import React from 'react';
import './NavBar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="navbar">
            <a href="#home">Allie Fehr</a>
            <div className="navbar-links">
                <a href="#about"><b>About</b></a>
                <a href="#projects"><b>Projects</b></a>
                <a href="#contact"><b>Contact</b></a>
            </div>
            <div className="social-links">
                <a href="https://linkedin.com/in/allie-fehr/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/aefehr" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </div>
    );
}

export default Navbar;
