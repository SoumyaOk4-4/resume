import React from 'react';
import "../App.css";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Soumya Chakraborty</h1>
      <br/>
      <p>Full Stack Developer (MERN) | Passionate about Web Development</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#ffe396',
    color: '#094385',
    textAlign: 'center',
    padding: '2em 0',
  },
};

export default Header;
