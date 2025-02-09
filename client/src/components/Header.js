import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css';
import NavigationMenu from './NavigationMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <>
        <header className="header">
          <div className="left-part">
            <Link to="/" className="home-link">
              <span className="initials">AF</span>
            </Link>
          </div>
  
          <div className="right-part">
            <button 
              className={`nav-btn ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" className="icons-style">
                {isMenuOpen ? (
                  <>
                    <circle cx="12" cy="12" r="3" opacity="0" />
                    <circle cx="24" cy="12" r="3" opacity="0" />
                    <circle cx="36" cy="12" r="3" opacity="0" />
                    <circle cx="36" cy="24" r="3" opacity="0" />
                    <circle cx="36" cy="36" r="3" opacity="0" />
                    <circle cx="24" cy="36" r="3" opacity="0" />
                    <circle cx="12" cy="36" r="3" opacity="0" />
                    <circle cx="12" cy="24" r="3" opacity="0" />
                    <rect x="21" y="21" width="39.94" height="6" rx="3" ry="3" opacity="1" />
                    <rect x="21" y="21" width="6" height="39.94" rx="3" ry="3" opacity="1" />
                  </>
                ) : (
                  <>
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="24" cy="12" r="3" />
                    <circle cx="36" cy="12" r="3" />
                    <circle cx="36" cy="24" r="3" />
                    <circle cx="36" cy="36" r="3" />
                    <circle cx="24" cy="36" r="3" />
                    <circle cx="12" cy="36" r="3" />
                    <circle cx="12" cy="24" r="3" />
                    <circle cx="24" cy="24" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </header>
        
        <NavigationMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </>
    );
};
  
export default Header;

