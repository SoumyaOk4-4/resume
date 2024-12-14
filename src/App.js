import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import "./App.css";

function App() {
  return (
    <div className='.fonts'>
      <Header />
      <br/>
      <br/>
      <About />

      <Projects />
      
      <Contact />
      
      <footer style={styles.footer}>
        <p>&copy; 2024 Soumya Chakraborty. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
};

export default App;
