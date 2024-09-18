import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

