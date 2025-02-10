import React, { useState } from 'react';
import './Projects.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import budgetBuddyImg from '../assets/images/budget_buddy.png'
import chopLabManagerImg from '../assets/images/chop_lab_manager.png'
import moveWiseImg from '../assets/images/move_wise.png'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { 
      name: "budget buddy", 
      type: "TypeScript, React", 
      image: budgetBuddyImg,
      github: "https://github.com/aefehr/budget-buddy" // Replace with actual repo link
    },
    { 
      name: "chop lab manager", 
      type: "Python, SQLite, PySide", 
      image: chopLabManagerImg,
      github: "https://github.com/aefehr/CHOP-Flow-Lab-Manager" // Replace with actual repo link
    },
    { 
      name: "move wise", 
      type: "JavaScript, Node.js (Express.js), Python, SQL, MySQL", 
      image: moveWiseImg,
      github: "https://github.com/aefehr/move-wise" // Replace with actual repo link
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-left">
        {projects.map((project, index) => (
          project.image && (
            <img
              key={index}
              src={project.image}
              alt={`${project.name} preview`}
              className={`project-image ${hoveredProject?.name === project.name ? 'visible' : ''}`}
            />
          )
        ))}
      </div>
      <div className="projects-right">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`projects-item ${hoveredProject?.name === project.name ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <span className="project-arrow">
                {hoveredProject?.name === project.name && (
                  <ArrowForwardIcon
                    style={{
                      fontSize: '1.5rem',
                      stroke: 'currentColor',
                      strokeWidth: 2,
                    }}
                  />
                )}
              </span>
              <span className="project-name">{project.name}</span>
              <span className="project-type">{project.type}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;






