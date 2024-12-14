import React from 'react';
import "../App.css";
const About = () => {
  return (
    <div style={styles.projectList}>
      <section className="about-container" style={styles.projectCard}>
        <h1 className="about-title">About Me</h1>
        <br/>
        <p className="about-text">
          Hello! I’m a passionate <strong>Full Stack Developer</strong> with expertise in:  
          <br />
          <span className="technologies">
            <b>HTML, CSS, JavaScript, MongoDB, Node.js, Express.js, React.js, and EJS</b>.
          </span>
        </p>

        <p className="about-text">
          Since starting my programming journey in <strong>2020</strong>, I’ve worked on several projects that have deepened my understanding of modern web technologies. I enjoy creating dynamic, user-friendly, and scalable applications.
        </p>

        <p className="about-text">
          Beyond development, I have a strong interest in <strong>Ethical Hacking and Cybersecurity</strong>. I’ve been an avid <b>Linux user</b> for years and have experience in:  
          <ul className="about-list">
            <li>Configuring and maintaining switches, routers, and virtual servers.</li>
            <li>Performing <b>Linux administration</b> tasks for servers and systems.</li>
            </ul>
            Also interested in making games like visual novel using <b>Ren'Py</b>.
        </p>

        <p className="about-text">
          I’m always excited to explore new challenges in development and cybersecurity, and I continuously strive to expand my knowledge.
        </p>
        <p className="about-text">

        </p>
    </section>
    </div>
  );
};

const styles = {
    projectList: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    projectCard: {
      textAlign: 'center',
      border: '1px solid #ddd',
      padding: '15px',
      width: '550px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
    },
  };
  

export default About;
