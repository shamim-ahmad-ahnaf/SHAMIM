import React from 'react';
import Navbar from './Component/Nav';
import Hero from './Component/Hero';
import About from './Component/About';
import SkillsSection from './Component/Skills';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
    </div>
  );
}

export default App;
