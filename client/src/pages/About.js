import React from "react";
import "./About.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import profileImg from '../assets/images/allie_profile_pic.png'

const About = () => (
  <div className="about-page">
    <div className="about-container">
      {/* Left Content */}
      <div className="about-content">
        {/* Fixed header section */}
        <div className="header-section">
          <h1 className="about-title">ABOUT</h1>
          <div className="underline"></div>
        </div>
        
        {/* Scrollable content section */}
        <div className="content-section">
          <p className="about-description">
            Hi, my name is <b>Allie Fehr</b>. I'm a Computer Science and Cognitive Science at the University of Pennsylvania, graduating in May 2025.
          </p>
          <p className="about-description">
            My experience includes full-stack and frontend software engineering.
            During my software engineering internship at Yahoo, I worked on the Commerce Delivery System team where I implemented
            advanced features, including live ad previews, on the Commerce Management System using TypeScript, React, and NestJS. I also utilized Svelte & Tailwind CSS to
            create a reusable, responsive ad template for retailer queries on Yahoo Search, estimated to generate over $10 
            million yearly through affiliate revenue.
          </p>
          <p className="about-description">
            Outside of class, I work as a peer Computer and Information Science tutor at UPenn.
            I'm passionate about language learning and work part-time tutoring English to non-native speakers while also improving 
            my own Spanish and Italian.
          </p>
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <ArrowDownwardIcon className="resume-icon" />
            <span className="text">resume</span>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="about-image">
        <img src={profileImg} alt="Allie Fehr" />
      </div>
    </div>
  </div>
);

export default About;



