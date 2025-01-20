import React from 'react';
import './Socials.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/aefehr" target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize="inherit" />
      </a>
      <a href="https://www.linkedin.com/in/allie-fehr/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize="inherit" />
      </a>
      <a href="mailto:fehr.allie@gmail.com">
        <EmailIcon fontSize="inherit" />
      </a>
    </div>
  );
};

export default Socials;
