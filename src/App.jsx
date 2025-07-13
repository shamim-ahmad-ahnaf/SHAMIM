import React from 'react';
import Navbar from './Component/Nav';
import Hero from './Component/Hero';
import About from './Component/About';
import SkillsSection from './Component/Skills';
import Projects from './Component/Projects';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 