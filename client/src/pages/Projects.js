import React, { useState } from 'react';
import './Projects.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { name: "budget buddy", type: "TypeScript, React" },
    { name: "chop lab manager", type: "Python, SQLite, PySide" },
    { name: "move wise", type: "JavaScript, Node.js (Express.js), Python, SQL, MySQL" },
  ];

  return (
    <div className="projects-container">
      <div className="projects-left">
        {/* Left section left blank for now */}
      </div>
      <div className="projects-right">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`projects-item ${hoveredProject === project.name ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <span className="project-name">{project.name}</span>
              <span className="project-type">{project.type}</span>
              <span className="project-arrow">
                {hoveredProject === project.name && (
                  <ArrowForwardIcon
                    style={{
                      fontSize: '1.5rem',
                      stroke: 'currentColor',
                      strokeWidth: 2,
                    }}
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;




