import React from "react";
import "./IntroSection.css"; 

function IntroSection() {
  return (
    <section className="intro-section">
      <h1 className="intro-heading outline-text">
        HI, MY NAME IS <span className="name-highlight">ALLIE </span>
      </h1>
      <h2 className="intro-subheading">
        I am a senior at the University of Pennsylvania, data structures and algorithms tutor, &amp; previous software engineer intern at Yahoo 
      </h2>
    </section>
  );
}

export default IntroSection;
