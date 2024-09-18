import React from 'react';


function Projects() {
  const projectList = [
    { name: 'Creating Calculator', description: 'Creating A Calculator With Basic Arthematic Operations', link: 'https://github.com/Bajibabu14/calculator.git' },
    { name: 'Weather App', description: 'Forecasting The Weather Reports At Different Locations', link: 'https://github.com/Bajibabu14/calculator.git' },
    { name: 'Typing Speed tester', description: 'To Practice The Speed Typing For The Beginners', link:'https://github.com/Bajibabu14/calculator.git'},
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
