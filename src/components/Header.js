import React from 'react';
import "../App.css";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Soumya Chakraborty</h1>
      <br/>
      <p>Passionate about Web Development, Ethical Hacking, Linux</p>
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
