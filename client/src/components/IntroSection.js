import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./IntroSection.css"; 

const IntroSection = () => {
  return (
    <section className="intro-section">
      <h1 className="intro-heading">
        <span className="outline-text">HI<span class="rounded">,</span> MY NAME IS </span>
        <span className="name-highlight"> ALLIE</span>
      </h1>
      <h2 className="intro-subheading">
        I'm a senior at the University of Pennsylvania, data structures and algorithms tutor, &amp; previous software engineer intern at Yahoo 
      </h2>
      <div className="intro-links">
        <a href="/projects" className="link">
          <ArrowForwardIcon className="arrow" />
          <span className="text">see my projects</span>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link">
          <ArrowForwardIcon className="arrow" />
          <span className="text">more about me</span>
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
