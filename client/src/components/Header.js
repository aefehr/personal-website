import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <div className="left-part">
          <span className="initials">AF</span>
        </div>
      
        <div className="right-part">
          <button className="nav-btn" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" className="icons-style">
              <title>Menu</title>
              <circle cx="12" cy="12" r="3" />
              <circle cx="24" cy="12" r="3" />
              <circle cx="36" cy="12" r="3" />
              <circle cx="36" cy="24" r="3" />
              <circle cx="36" cy="36" r="3" />
              <circle cx="24" cy="36" r="3" />
              <circle cx="12" cy="36" r="3" />
              <circle cx="12" cy="24" r="3" />
              <circle cx="24" cy="24" r="3" /> 
            </svg>
          </button>
        </div>
      </header>
    );
};

export default Header;


