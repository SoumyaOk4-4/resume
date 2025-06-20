import React from 'react';
import "../App.css";
const projects = [
  {
    name: 'NekoChan',
    description: 'Social Media About Cats and for Cat Lovers.',
    githubLink: 'https://github.com/SoumyaOk4-4/neko-chan-app',
    livelink: 'https://neko-chan-senpai.netlify.app/',
  },
  {
    name: 'EquiSource',
    description: 'A Rental E-Commerce Platform for Our College.',
    githubLink: 'https://github.com/SoumyaOk4-4/EquiSource',
    livelink: 'https://equisource.netlify.app/',
  },
  {
    name: 'REWind',
    description: 'A Visual Novel Game Made about Life, Expectations and Reality.',
    livelink: 'https://moshimoshi-04.itch.io/rewind',
  },
  {
    name: 'EquationSolver',
    description: 'An Android App to Solve Linear Equations.',
    githubLink: 'https://github.com/SoumyaOk4-4/Equation-Solver-Android-Application',
  },
  {
    name: 'GameSpace',
    description: 'A Game Searching Platform Using Steam APIs',
    githubLink: 'https://github.com/SoumyaOk4-4/GameSpace',
  },
];

const Projects = () => {
  return (
    <section style={styles.projects}>
      <h2>Projects</h2>
      <div style={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <br/>
            <br/>
            <a href={project.livelink} target="_blank" rel="noopener noreferrer">
              View on Internet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projects: {
    padding: '20px',
    textAlign: 'center',
  },
  projectList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  projectCard: {
    border: '1px solid #ddd',
    padding: '15px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
  },
};

export default Projects;
