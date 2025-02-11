import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <div className={`icon-wrapper ${isMenuOpen ? 'rotate' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" className="icons-style">
                  {isMenuOpen ? (
                    <>
                      <rect 
                        x="3" 
                        y="20" 
                        width="40"  
                        height="6"  
                        rx="3"  
                        ry="3"  
                        transform="rotate(45 24 24)" 
                      />
                      <rect 
                        x="5"  
                        y="20"  
                        width="40"  
                        height="6"  
                        rx="3"  
                        ry="3"  
                        transform="rotate(-45 24 24)" 
                      />
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
              </div>
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
