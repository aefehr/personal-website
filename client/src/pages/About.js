import React from "react";
import "./About.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const About = () => (
  <div className="about-container">
    {/* Left Section */}
    <div className="about-left">
      <h1 className="about-title">ABOUT</h1>
      <p className="about-description">
        Hey, my name is <b>Charles Bruyerre</b> and I use Sharlee as my nickname
        across social media. I’m a graphic designer, UX/UI designer & front-end
        web developer from France. I’m also passionate about pop music and make
        portraits and universes around what I listen to. I’m always curious to
        learn more when it comes to new technologies and creative coding.
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

    {/* Right Section */}
    <div className="about-right"></div>
  </div>
);

export default About;
