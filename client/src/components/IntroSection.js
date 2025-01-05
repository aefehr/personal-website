import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./IntroSection.css"; 

function IntroSection() {
  return (
    <section className="intro-section">
      <h1 className="intro-heading outline-text">
        HI, MY NAME IS <span className="name-highlight">ALLIE FEHR</span>
      </h1>
      <h2 className="intro-subheading">
        I am a senior at the University of Pennsylvania, data structures and algorithms tutor, &amp; previous software engineer intern at Yahoo 
      </h2>
      <div className="intro-links">
        <a href="/projects" className="link">
          <ArrowForwardIcon className="arrow" />
          <span className="text">projects</span>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link">
          <ArrowForwardIcon className="arrow" />
          <span className="text">resume</span>
        </a>
      </div>
    </section>
  );
}

export default IntroSection;
