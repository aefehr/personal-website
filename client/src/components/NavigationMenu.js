import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu = ({ isOpen, onClose }) => {
    return (
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item" onClick={onClose}>
          <span className="nav-number">01</span>
          <span className="nav-text">HOME</span>
        </Link>
        <Link to="/projects" className="nav-item" onClick={onClose}>
          <span className="nav-number">02</span>
          <span className="nav-text">PROJECTS</span>
        </Link>
        <Link to="/about" className="nav-item" onClick={onClose}>
          <span className="nav-number">03</span>
          <span className="nav-text">ABOUT</span>
        </Link>
        <Link to="/contact" className="nav-item" onClick={onClose}>
          <span className="nav-number">04</span>
          <span className="nav-text">CONTACT</span>
        </Link>
      </nav>
    );
};
  
export default NavigationMenu;