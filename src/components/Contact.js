import React from 'react';
import "../App.css";
const Contact = () => {
  return (
    <section style={styles.contact}>
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:soumya.chk2004@gmail.com">soumya.chk2004@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/SoumyaOk4-4" target="_blank" rel="noopener noreferrer">@SoumyaOk4-4</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/soumya-chakraborty-122388225/" target="_blank" rel="noopener noreferrer">@soumya-chakraborty-122388225</a></p>
    </section>
  );
};

const styles = {
  contact: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Contact;
