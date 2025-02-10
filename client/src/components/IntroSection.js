import React from "react";
import { Link } from 'react-router-dom';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./IntroSection.css"; 


const IntroSection = () => {
  return (
    <section className="intro-section">
      <h1 className="intro-heading">
        <span className="outline-text">HI<span class="rounded">,</span> MY NAME IS </span>
        <span className="name-highlight"> ALLIE FEHR</span>
      </h1>
      <h2 className="intro-subheading">
        I'm a previous software engineer intern at Yahoo, 
        computer science &amp; cognitive science student at the University of Pennsylvania, &amp; computer science tutor
      </h2>
      <div className="intro-links">
        <Link to="/projects" className="link">
          <ArrowForwardIcon className="arrow" />
          <span className="text">see my projects</span>
        </Link>
        <Link to="/about" className="link">
          <ArrowForwardIcon className="arrow" />
          <span className="text">more about me</span>
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;
