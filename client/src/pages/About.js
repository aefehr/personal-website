import React from "react";
import "./About.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import profileImg from '../assets/images/allie_profile_pic.png'

const About = () => (
  <div className="about-page">
    <div className="about-container">
      {/* Left Content */}
      <div className="about-content">
        <h1 className="about-title">ABOUT</h1>
        <div className="underline"></div>
        <p className="about-description">
          Hey, my name is <b>Allie Fehr</b>. I'm a senior at the University of Pennsylvania
          studying Computer Science and Cognitive Science (concentrating in computation and cognition).
          I’m also passionate about language learning and work part-time tutoring English to non-native speakers.
        </p>
        <a
          href="/path-to-your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <ArrowDownwardIcon className="resume-icon" />
          resume
        </a>
      </div>

      {/* Right Image */}
      <div className="about-image">
        <img src={profileImg} alt="Allie Fehr" />
      </div>
    </div>
  </div>
);

export default About;



